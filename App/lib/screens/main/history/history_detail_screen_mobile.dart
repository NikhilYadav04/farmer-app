import 'package:ai_plant_detecion/global/colors.dart';
import 'package:ai_plant_detecion/styling/sizeConfig.dart';
import 'package:ai_plant_detecion/widgets/home_widgets.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class HistoryDetailScreenMobile extends StatelessWidget {
  const HistoryDetailScreenMobile({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: screenBackgroundColorIndigo,
        body: SingleChildScrollView(
          child: Container(
            padding: EdgeInsets.symmetric(
                vertical: 1.26 * SizeConfig.heightMultiplier,
                horizontal: 2.67 * SizeConfig.widthMultiplier),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                IconButton(
                  onPressed: () => Get.back(),
                  icon: Icon(
                    Icons.arrow_back,
                    color: Colors.white,
                    size: 4.21 * SizeConfig.heightMultiplier,
                  ),
                ),
                SizedBox(
                  height: 2.10 * SizeConfig.heightMultiplier,
                ),
                //*plant image
                ClipRRect(
                  borderRadius:
                      BorderRadius.circular(1.05 * SizeConfig.heightMultiplier),
                  child: Image.asset("assets/plants/tom.jpg"),
                ),
                SizedBox(
                  height: 3.16022332244812 * SizeConfig.heightMultiplier,
                ),
                //*plant and disease text
                Padding(
                  padding: EdgeInsets.symmetric(
                      horizontal: 1.11 * SizeConfig.widthMultiplier),
                  child: diseaseTextWidget(context),
                ),
                SizedBox(
                  height: 2.63 * SizeConfig.heightMultiplier,
                ),
                Padding(
                    padding: EdgeInsets.symmetric(
                        horizontal: 1.11 * SizeConfig.widthMultiplier),
                    child: Divider(
                      color: Colors.white,
                      height: 5,
                    )),
                SizedBox(
                  height: 1.58 * SizeConfig.heightMultiplier,
                ),
                //*remedies text
                Padding(
                    padding: EdgeInsets.symmetric(
                        horizontal: 1.11 * SizeConfig.widthMultiplier),
                    child: remediesTextWIdget(context)),
                SizedBox(
                  height: 1.58 * SizeConfig.heightMultiplier,
                ),
                //*response given by ai
                Padding(
                    padding: EdgeInsets.symmetric(
                      horizontal: 1.11 * SizeConfig.widthMultiplier,
                    ),
                    child: remedies(
                        "To manage Tomato Leaf Curl Virus, start\nby regularly removing any affect leaves\nto prevent the disease from spreading\nfurther. Control whiteflies, which are the\nmain carriers of this virus, by applying\ninsecticidal soap or neem oil. Practice\ncrop rotation by avoiding planting\ntomatoes in the same location year after\nyear to reduce the chance of the virus\npersisting in the soil.Ensure that the plants\nare spaced."))
              ],
            ),
          ),
        ),
      ),
    );
  }
}
