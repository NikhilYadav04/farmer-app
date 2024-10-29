import 'package:flutter/material.dart';
import 'package:get/get.dart';

class LogInController extends GetxController {
  //*define all the text controllers
  late TextEditingController emailController = TextEditingController();
  late TextEditingController passwordController = TextEditingController();

  //*clear controllers
  void clear() {
    emailController.clear();
    passwordController.clear();
  }

  RxBool obscureText = false.obs;

  @override
  void onClose() {
    super.onClose();
  }
}
