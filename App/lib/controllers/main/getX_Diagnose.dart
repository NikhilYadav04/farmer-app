// ignore_for_file: constant_pattern_never_matches_value_type

import 'package:ai_plant_detecion/global/locale_var.dart';
import 'package:ai_plant_detecion/lists/plants_list.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_state_manager/get_state_manager.dart';

class initialize extends GetxController {
  //* variable to open diagnose box
  RxBool diagnoseShow = false.obs;

  //* selected plant variable and initialise it based on language
  RxString? selectedPlant = locale_app.languageCode == "en"
      ? "Tomato".obs
      : locale_app.languageCode == "hi"
          ? "टमाटर".obs
          : "टोमॅटो".obs;

  String? selectPlant(BuildContext context) {
    switch (locale_app.languageCode) {
      case "en":
        return "Tomato";
      case "hi":
        return "टमाटर";
      case "mr":
        return "टोमॅटो";
      default:
        return "Tomato"; // Default to English if no valid locale is found
    }
  }

  RxBool isExpanded = false.obs;

  //* to change state of bool
  void change() {
    diagnoseShow.value = !diagnoseShow.value;
    isExpanded = false.obs;
  }

  //*select list based on language
  List<DropdownMenuItem> selectList(BuildContext context) {
    switch (locale_app.languageCode) {
      case "en":
        return plants_en;
      case "hi":
        return plants_hi;
      case "mr":
        return plants_mr;
      default:
        return plants_en; // Default to English if no valid locale is found
    }
  }
}
