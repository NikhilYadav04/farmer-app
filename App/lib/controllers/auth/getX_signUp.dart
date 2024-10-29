import 'package:flutter/material.dart';
import 'package:get/get.dart';

class SignUpController extends GetxController {
  //*define all the text controllers
  late TextEditingController emailController = TextEditingController();
  late TextEditingController passwordController= TextEditingController();
  late TextEditingController phoneController = TextEditingController();

  //*clear controllers
  void clear() {
    emailController.clear();
    passwordController.clear();
    phoneController.clear();
  }

  RxBool obscureText = false.obs;

  @override
  void onClose() {
    super.onClose();
  }
}
