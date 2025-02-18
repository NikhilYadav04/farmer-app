import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:get/get.dart';
import 'package:get/get_rx/get_rx.dart';

class HistoryController extends GetxController {
  //*define controllers
  final TextEditingController searchController = TextEditingController();
  final TextEditingController editController = TextEditingController();
  GlobalKey<FormState> editKey = GlobalKey<FormState>();

  //* bool
  RxInt expandedIndex = 0.obs;


  //* functions

  //* for implementing expansion tile icon changes
  void changes(int index) {
    if (index+1 == expandedIndex.value) {
      expandedIndex.value = 0;
    } else {
      expandedIndex.value = index + 1;
    }
  }
}
