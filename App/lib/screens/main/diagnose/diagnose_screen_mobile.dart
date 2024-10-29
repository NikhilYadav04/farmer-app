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
            Obx(() => controller.diagnoseShow == true
                ? TweenAnimationBuilder(
                    tween: Tween<Offset>(
                      begin: Offset(0, 1), // Start from the bottom
                      end: Offset(0, 0), // End at the current position
                    ),
                    duration: Duration(milliseconds: 1000),
                    curve: Curves.easeInOut,
                    builder: (context, Offset offset, child) {
                      return Transform.translate(
                        offset:
                            offset * SizeConfig.height, // Move based on height
                        child: Container(
                          padding: EdgeInsets.symmetric(
                              vertical: 2.10 * SizeConfig.heightMultiplier,
                              horizontal: 2.83 * SizeConfig.widthMultiplier),
                          height: 44.24 * SizeConfig.heightMultiplier,
                          width: 93.75 * SizeConfig.widthMultiplier,
                          decoration: BoxDecoration(
                            color: fieldColor,
                            borderRadius: BorderRadius.circular(
                                1.05 * SizeConfig.heightMultiplier),
                          ),
                          child: getResponseWidget(context, controller),
                        ),
                      );
                    },
                  )
                : SizedBox())
          ],
        ),
      ),
    );
  }
}

TextStyle style =
    TextStyle(color: screenBackgroundColorGreen, fontFamily: "CoreSansMed");
