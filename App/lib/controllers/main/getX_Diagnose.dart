// ignore_for_file: constant_pattern_never_matches_value_type

import 'package:get/get.dart';
import 'package:get/get_state_manager/get_state_manager.dart';

class initialize extends GetxController {
  //* variable to open diagnose box
  RxBool diagnoseShow = false.obs;

  RxBool isExpanded = false.obs;

  //* to change state of bool
  void change() {
    diagnoseShow.value = !diagnoseShow.value;
    isExpanded = false.obs;
  }
}
