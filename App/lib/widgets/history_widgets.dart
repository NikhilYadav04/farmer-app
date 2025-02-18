import 'package:ai_plant_detecion/controllers/main/getX_history.dart';
import 'package:ai_plant_detecion/global/colors.dart';
import 'package:ai_plant_detecion/styling/appTheme.dart';
import 'package:ai_plant_detecion/styling/sizeConfig.dart';
import 'package:ai_plant_detecion/widgets/home_widgets.dart';
import 'package:ai_plant_detecion/widgets/home_widgets_2.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_state_manager/src/rx_flutter/rx_obx_widget.dart';

Widget medicineList(HistoryController controller) {
  return ListView.builder(
      shrinkWrap: true,
      physics: NeverScrollableScrollPhysics(),
      itemCount: 4,
      itemBuilder: (context, index) {
        return Padding(
          padding: EdgeInsets.symmetric(vertical: 17),
          child: Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(5),
                color: AppTheme.containerColor,
                boxShadow: [
                  BoxShadow(
                    blurRadius: 5,
                    spreadRadius: 3,
                    color: AppTheme.screenBackgroundColorGreen,
                  )
                ],
              ),
              child: ExpansionTile(
                //* function for changing arrow icon
                onExpansionChanged: (expanded) {
                  if (expanded) {
                    controller.expandedIndex.value = index + 1;
                  } else {
                    controller.expandedIndex.value = -1;
                  }
                },
                iconColor: null,
                trailing: SizedBox.shrink(),
                title: Obx(
                  () => Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Center(
                        child: Text(
                          "Digestion Issues",
                          style: TextStyle(
                              color: Colors.white,
                              fontFamily: "CoreSansLight",
                              fontWeight: FontWeight.w500,
                              fontSize: 30),
                        ),
                      ),
                      index + 1 == controller.expandedIndex.value
                          ? Icon(
                              Icons.arrow_drop_up_sharp,
                              color: Colors.white,
                              size: 36,
                            )
                          : Icon(
                              Icons.arrow_drop_down_sharp,
                              color: Colors.white,
                              size: 36,
                            )
                    ],
                  ),
                ),
                children: [
                  Column(
                    children: [
                      Padding(
                        padding: EdgeInsets.symmetric(
                          vertical: 10,
                          horizontal: 3 * SizeConfig.widthMultiplier,
                        ),
                        child: Text(
                          maxLines: 5,
                          overflow: TextOverflow.ellipsis,
                          "⦁ Giloy possesses digestive properties that help improve digestion, reduce hyperacidity, and prevent constipation. It can also help alleviate bloating and other digestive discomforts.",
                          style: TextStyle(
                              fontFamily: "CoreSansLight",
                              fontWeight: FontWeight.w500,
                              color: Colors.white,
                              fontSize: 18),
                        ),
                      )
                    ],
                  ),
                ],
              )),
        );
      });
}

Widget medicineDescription(String desc) {
  return ListView.builder(
      physics: NeverScrollableScrollPhysics(),
      shrinkWrap: true,
      itemCount: 4,
      itemBuilder: (context, index) {
        return Padding(
          padding: EdgeInsets.symmetric(
            vertical: 10,
            horizontal: 1.11 * SizeConfig.widthMultiplier,
          ),
          child: Text(
            maxLines: 4,
            overflow: TextOverflow.ellipsis,
            "⦁ ${desc}",
            style: TextStyle(
                fontFamily: "CoreSansLight",
                fontWeight: FontWeight.w500,
                color: Colors.white,
                fontSize: 18),
          ),
        );
      });
}

Widget titleText(HistoryController controller) {
  return Center(
    child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          "Tomato",
          style: TextStyle(
              color: screenBackgroundColorGreen,
              fontFamily: "CoreSansBold",
              fontSize: 4.2 * SizeConfig.heightMultiplier),
        ),
        SizedBox(
          width: 10,
        ),
        GestureDetector(
            onTap: () {
              editDialog(controller);
            },
            child: Icon(
              Icons.edit,
              color: Colors.white,
              size: 28,
            ))
      ],
    ),
  );
}

void editDialog(HistoryController controller) {
  Get.bottomSheet(Container(
      height: 300,
      decoration: BoxDecoration(
          color: AppTheme.containerColor,
          borderRadius: BorderRadius.only(
              topLeft: Radius.circular(25), topRight: Radius.circular(25))),
      child: Column(
        children: [
          SizedBox(
            height: 10,
          ),
          Divider(
            height: 10,
            color: Colors.white,
            indent: 160,
            endIndent: 160,
            thickness: 5,
          ),
          SizedBox(
            height: 25,
          ),
          chooseWidget(Icons.edit, "Edit Plant Title Name"),
          SizedBox(
            height: 15,
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 15),
            child: Form(
                key: controller.editKey,
                child: TextFormField(
                  validator: (value) {
                    if(GetUtils.isLengthLessOrEqual(value, 5)){
                      return "Name length must be more than 5 length.";
                    }
                    return null;
                  },
                  style: style.copyWith(fontSize: 22),
                  controller: controller.editController,
                  decoration: InputDecoration(
                    label: Text("Tomato",style: style.copyWith(fontSize: 22),),
                    floatingLabelBehavior: FloatingLabelBehavior.never,
                    contentPadding: EdgeInsets.all(22),
                      fillColor: AppTheme.screenBackgroundColorIndigo,
                      filled: true,
                      errorBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(10),
                          borderSide: BorderSide(color: Colors.red)),
                      focusedBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(10),
                          borderSide: BorderSide(
                              color: AppTheme.screenBackgroundColorGreen)),
                      enabledBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(10),
                          borderSide:
                              BorderSide(color: AppTheme.containerColor))),
                )),
          ),
          SizedBox(height: 30,),
          button((){}, "Edit", 50)
        ],
      )));
}

TextStyle style = TextStyle(
  color: Colors.white,
  fontFamily: "CoreSansLight",
  fontWeight: FontWeight.w800,
  fontSize: 24
);
