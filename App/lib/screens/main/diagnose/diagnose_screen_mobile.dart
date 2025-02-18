import 'package:ai_plant_detecion/controllers/main/getX_Diagnose.dart';
import 'package:ai_plant_detecion/global/colors.dart';
import 'package:ai_plant_detecion/styling/sizeConfig.dart';
import 'package:ai_plant_detecion/widgets/home_widgets.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class DiagnoseScreenMobile extends StatelessWidget {
  final initialize controller = Get.put(initialize());

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        padding: EdgeInsets.symmetric(
            vertical: 1.58 * SizeConfig.heightMultiplier,
            horizontal: 3.34 * SizeConfig.widthMultiplier),
        child: Column(
          children: [
            //*intro widget
            checkWidget(context, controller),
            SizedBox(
              height: 2.63 * SizeConfig.heightMultiplier,
            ),
            //*widget for uploading crop and get response
            Obx(() {
              return TweenAnimationBuilder(
                tween: Tween<Offset>(
                  begin: controller.diagnoseShow.value
                      ? Offset(0, 1)
                      : Offset(0,
                          0), //* Start from the bottom if true, else start from current position
                  end: controller.diagnoseShow.value
                      ? Offset(0, 0)
                      : Offset(0,
                          1), //* End at current position if true, else end at the bottom
                ),
                duration: Duration(milliseconds: 1000),
                curve: Curves.easeInOut,
                builder: (context, Offset offset, child) {
                  return Transform.translate(
                    offset: offset * SizeConfig.height,
                    child: Container(
                        padding: EdgeInsets.symmetric(
                            vertical: 1 * SizeConfig.heightMultiplier,
                            horizontal: 2.5 * SizeConfig.widthMultiplier),
                        height: 44 * SizeConfig.heightMultiplier,
                        width: 93.75 * SizeConfig.widthMultiplier,
                        decoration: BoxDecoration(
                          color: fieldColor,
                          borderRadius: BorderRadius.circular(
                              1.05 * SizeConfig.heightMultiplier),
                        ),
                        child: getResponseWidget(context, controller)),
                  );
                },
              );
            })
          ],
        ),
      ),
    );
  }
}

TextStyle style =
    TextStyle(color: screenBackgroundColorGreen, fontFamily: "CoreSansMed");
