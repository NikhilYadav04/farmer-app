import 'package:ai_plant_detecion/controllers/main/getX_history.dart';
import 'package:ai_plant_detecion/global/colors.dart';
import 'package:ai_plant_detecion/styling/sizeConfig.dart';
import 'package:ai_plant_detecion/widgets/history_widgets.dart';
import 'package:ai_plant_detecion/widgets/home_widgets.dart';
import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';

class HistoryDetailScreenMobile extends StatelessWidget {
  HistoryDetailScreenMobile({super.key});
  final HistoryController historyController = Get.put(HistoryController());

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: screenBackgroundColorIndigo,
        body: SingleChildScrollView(
          child: Padding(
            padding: EdgeInsets.symmetric(
                vertical: 1.26 * SizeConfig.heightMultiplier,
                horizontal: 2.67 * SizeConfig.widthMultiplier),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      IconButton(
                        onPressed: () {
                          Get.back();
                        },
                        icon: Icon(
                          Icons.arrow_back_ios,
                          color: Colors.white,
                          size: 4.21 * SizeConfig.heightMultiplier,
                        ),
                      ),
                      Icon(
                        Icons.bookmark_add_outlined,
                        color: Colors.white,
                        size: 4.5 * SizeConfig.heightMultiplier,
                      ),
                    ]),

                //* title text
                titleText(historyController),
                SizedBox(
                  height: 20,
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

                //*medicinal uses
                Padding(
                    padding: EdgeInsets.symmetric(
                        horizontal: 1.11 * SizeConfig.widthMultiplier),
                    child: remediesTextWIdget(
                        context, AppLocalizations.of(context)!.remedyText)),
                SizedBox(
                  height: 1.5 * SizeConfig.heightMultiplier,
                ),
                Padding(
                    padding: EdgeInsets.symmetric(
                      horizontal: 2 * SizeConfig.widthMultiplier,
                    ),
                    child: medicineList(historyController)),

                //* conservation status
                SizedBox(
                  height: 2.5 * SizeConfig.heightMultiplier,
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
                Padding(
                    padding: EdgeInsets.symmetric(
                        horizontal: 1.11 * SizeConfig.widthMultiplier),
                    child: remediesTextWIdget(context,
                        AppLocalizations.of(context)!.conservationText)),
                SizedBox(
                  height: 1 * SizeConfig.heightMultiplier,
                ),
                medicineDescription(
                    "Giloy possesses digestive properties that help improve digestion, reduce hyperacidity, and prevent constipation. It can also help alleviate bloating and other digestive discomforts."),
                SizedBox(
                  height: 15,
                ),
                Padding(
                    padding: EdgeInsets.symmetric(
                        horizontal: 1.11 * SizeConfig.widthMultiplier),
                    child: Divider(
                      color: Colors.white,
                      height: 5,
                    )),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
