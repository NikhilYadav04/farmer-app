import 'package:ai_plant_detecion/controllers/main/getX_Diagnose.dart';
import 'package:ai_plant_detecion/global/colors.dart';
import 'package:ai_plant_detecion/screens/main/history/history_detail_screen_mobile.dart';
import 'package:ai_plant_detecion/styling/sizeConfig.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';

Widget historyList() {
  return Padding(
    padding: EdgeInsets.symmetric(
        horizontal: 3.34 * SizeConfig.widthMultiplier,
        vertical: 1.05 * SizeConfig.heightMultiplier),
    child: Row(
      children: [
        Expanded(
            flex: 1,
            child: ClipRRect(
                borderRadius:
                    BorderRadius.circular(1.05 * SizeConfig.heightMultiplier),
                child: Image.asset("assets/plants/tom.jpg"))),
        Expanded(
            flex: 1,
            child: Padding(
              padding: EdgeInsets.symmetric(
                  horizontal: 2.23 * SizeConfig.widthMultiplier),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    " Tomato",
                    style: TextStyle(
                        color: Colors.white,
                        fontSize: 3.01 * SizeConfig.heightMultiplier,
                        fontFamily: "CoreSansBold"),
                  ),
                  SizedBox(
                    height: 5.02 * SizeConfig.heightMultiplier,
                  ),
                  InkWell(
                    onTap: () => Get.to(() => HistoryDetailScreenMobile(),
                        transition: Transition.rightToLeft),
                    child: Text(
                      " Tomato_Blink >",
                      style: TextStyle(
                          color: screenBackgroundColorGreen,
                          fontSize: 2.31 * SizeConfig.heightMultiplier,
                          fontFamily: "CoreSansBold"),
                    ),
                  ),
                ],
              ),
            ))
      ],
    ),
  );
}

Widget diseaseTextWidget(BuildContext context) {
  return Column(
    children: [
      Row(
        children: [
          Container(
            width: 22.32 * SizeConfig.widthMultiplier,
            child: Text(
              "${AppLocalizations.of(context)!.plantText}    ",
              style: TextStyle(fontSize: 2.63 * SizeConfig.heightMultiplier)
                  .copyWith(color: Colors.white, fontFamily: "CoreSansLight"),
            ),
          ),
          SizedBox(
            width: 4.46 * SizeConfig.widthMultiplier,
          ),
          Text(
            ":",
            style: TextStyle(fontSize: 2.63 * SizeConfig.heightMultiplier)
                .copyWith(color: Colors.white, fontFamily: "CoreSansLight"),
          ),
          SizedBox(
            width: 4.46 * SizeConfig.widthMultiplier,
          ),
          Text(
            "Tomato",
            style: TextStyle(fontSize: 2.63 * SizeConfig.heightMultiplier)
                .copyWith(
                    color: screenBackgroundColorGreen,
                    fontFamily: "CoreSansLight"),
          ),
        ],
      ),
      Row(
        children: [
          Container(
            width: 22.32 * SizeConfig.widthMultiplier,
            child: Text(
              "${AppLocalizations.of(context)!.diseaseText}",
              style: TextStyle(fontSize: 2.63 * SizeConfig.heightMultiplier)
                  .copyWith(color: Colors.white, fontFamily: "CoreSansLight"),
            ),
          ),
          SizedBox(
            width: 4.46 * SizeConfig.widthMultiplier,
          ),
          Text(
            ":",
            style: TextStyle(fontSize: 2.63 * SizeConfig.heightMultiplier)
                .copyWith(color: Colors.white, fontFamily: "CoreSansLight"),
          ),
          SizedBox(
            width: 4.46 * SizeConfig.widthMultiplier,
          ),
          Text(
            "Early_Blight",
            style: TextStyle(fontSize: 2.63 * SizeConfig.heightMultiplier)
                .copyWith(
                    color: screenBackgroundColorGreen,
                    fontFamily: "CoreSansLight"),
          )
        ],
      )
    ],
  );
}

Widget remediesTextWIdget(BuildContext context) {
  return Row(
    children: [
      Icon(
        Icons.medical_services,
        color: Colors.white,
        size: 3.37 * SizeConfig.heightMultiplier,
      ),
      SizedBox(
        width: 2.67 * SizeConfig.widthMultiplier,
      ),
      Padding(
        padding: EdgeInsets.only(top: 0.52 * SizeConfig.heightMultiplier),
        child: Text(
          AppLocalizations.of(context)!.remedyText,
          style: TextStyle(
              color: screenBackgroundColorGreen,
              fontFamily: "CoreSansMed",
              fontSize: 3.47 * SizeConfig.heightMultiplier),
        ),
      )
    ],
  );
}

Widget remedies(String remedies) {
  return Row(
    children: [
      Text(
        maxLines: 11,
        overflow: TextOverflow.ellipsis,
        remedies,
        style: TextStyle(
            color: Color.fromARGB(255, 230, 225, 225),
            fontFamily: "CoreSansLight",
            fontWeight: FontWeight.bold,
            fontSize: 2.00 * SizeConfig.heightMultiplier),
      ),
    ],
  );
}

Widget checkWidget(BuildContext context, initialize controller) {
  return Container(
    height: 26.33 * SizeConfig.heightMultiplier,
    decoration: BoxDecoration(
        color: fieldColor,
        borderRadius:
            BorderRadius.circular(1.05 * SizeConfig.heightMultiplier)),
    child: Row(
      children: [
        Flexible(flex: 1, child: Image.asset("assets/plants/plant.png")),
        Flexible(
            flex: 2,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SizedBox(
                  height: 2.63 * SizeConfig.heightMultiplier,
                ),
                Text(
                  AppLocalizations.of(context)!.checkText,
                  maxLines: 1,
                  style: TextStyle(
                      color: Colors.white,
                      fontFamily: "CoreSansBold",
                      fontSize: 3.05 * SizeConfig.heightMultiplier),
                ),
                SizedBox(
                  height: 2.10 * SizeConfig.heightMultiplier,
                ),
                Text(
                  maxLines: 2,
                  AppLocalizations.of(context)!.checkText1,
                  style: TextStyle(
                      color: Colors.white,
                      fontFamily: "CoreSansLight",
                      fontSize: 1.89 * SizeConfig.heightMultiplier),
                ),
                SizedBox(
                  height: 2.63 * SizeConfig.heightMultiplier,
                ),
                button(controller.change,
                    AppLocalizations.of(context)!.bottomBarDiagnose, context)
              ],
            )),
      ],
    ),
  );
}

Widget getResponseWidget(BuildContext context, initialize controller) {
  return Column(
    children: [
      Flexible(
          flex: 1,
          child: ClipRRect(
            borderRadius:
                BorderRadius.circular(0.52 * SizeConfig.heightMultiplier),
            child: Image.asset(
              "assets/plants/tom.jpg",
              // scale: responsiveContainerSize(
              //     5.5, width, height),
            ),
          )),
      Flexible(
          flex: 1,
          child: ClipRRect(
              borderRadius:
                  BorderRadius.circular(0.52 * SizeConfig.heightMultiplier),
              child: Column(
                children: [
                  SizedBox(
                    height: 3.16 * SizeConfig.heightMultiplier,
                  ),
                  Flexible(
                    flex: 1,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          "Select A Crop  :  ",
                          style: TextStyle(
                              color: Colors.white,
                              fontFamily: "CoreSansMed",
                              fontSize: 2.52 * SizeConfig.heightMultiplier),
                        ),
                        // SizedBox(
                        //   width: 3.34 * SizeConfig.widthMultiplier,
                        // ),
                        Flexible(
                          flex: 1,
                          child: Obx(() => Container(
                                height: 5.5 * SizeConfig.heightMultiplier,
                                width: 32.00 * SizeConfig.widthMultiplier,
                                child: DropdownButtonFormField(
                                    icon: SizedBox.shrink(),
                                    decoration: InputDecoration(
                                        contentPadding: EdgeInsets.symmetric(
                                            horizontal: 3.3 *
                                                SizeConfig.widthMultiplier,
                                            vertical: 1 *
                                                SizeConfig.heightMultiplier),
                                        enabledBorder: OutlineInputBorder(
                                            borderSide: BorderSide(
                                                color:
                                                    screenBackgroundColorGreen)),
                                        focusedBorder: OutlineInputBorder(
                                            borderSide: BorderSide(
                                                color:
                                                    screenBackgroundColorGreen))),
                                    isExpanded: controller.isExpanded.value,
                                    value: controller.selectedPlant?.value,
                                    items: controller.selectList(context),
                                    onChanged: (value) {
                                      controller.selectedPlant?.value = value!;
                                    }),
                              )),
                        )
                      ],
                    ),
                  ),
                  SizedBox(
                    height: 3.68 * SizeConfig.heightMultiplier,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      button(() {}, AppLocalizations.of(context)!.uploadText,
                          context),
                      button(() {}, AppLocalizations.of(context)!.submitText,
                          context)
                    ],
                  )
                ],
              )))
    ],
  );
}

Widget button(void Function() onTap, String text, BuildContext context) {
  return GestureDetector(
    onTap: onTap,
    child: Container(
      height: 5.26 * SizeConfig.heightMultiplier,
      width: 35.71 * SizeConfig.widthMultiplier,
      decoration: BoxDecoration(
          color: screenBackgroundColorGreen,
          borderRadius:
              BorderRadius.circular(2.63 * SizeConfig.heightMultiplier)),
      child: Center(
        child: Text(text,
            style: TextStyle(
                color: Colors.white,
                fontFamily: "CoreSansMed",
                fontSize: 2.10 * SizeConfig.heightMultiplier)),
      ),
    ),
  );
}
