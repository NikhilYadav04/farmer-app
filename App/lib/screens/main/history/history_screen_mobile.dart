import 'package:ai_plant_detecion/controllers/main/getX_history.dart';
import 'package:ai_plant_detecion/styling/sizeConfig.dart';
import 'package:ai_plant_detecion/widgets/auth_widgets.dart';
import 'package:ai_plant_detecion/widgets/home_widgets.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';

class HistoryScreenMobile extends StatelessWidget {
  final HistoryController controller = Get.put(HistoryController());

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          height: 0.52 * SizeConfig.heightMultiplier,
        ),
        //*search field
        Container(
          padding: EdgeInsets.symmetric(
              horizontal: 2.67 * SizeConfig.widthMultiplier),
          child: Column(
            children: [
              fieldText(
                  AppLocalizations.of(context)!.searchPlantText,
                  controller.searchController,
                  Icons.search_rounded,
                  TextInputType.text),
              SizedBox(
                height: 1.47 * SizeConfig.heightMultiplier,
              ),
            ],
          ),
        ),

        //* for showing history list of plants
        Expanded(
          child: ListView.builder(
              itemCount: 5,
              itemBuilder: (context, index) {
                return historyList();
              }),
        ),
      ],
    );
  }
}
