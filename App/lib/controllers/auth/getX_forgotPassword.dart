import 'package:flutter/material.dart';
import 'package:get/get.dart';

class forgotPhoneController extends GetxController {
  //* define controllers
  TextEditingController phoneController = TextEditingController();

  //*clear controllers
  void clear() {
    phoneController.clear();
  }

  @override
  void onClose() {
    super.onClose();
  }
}

class forgotEmailController extends GetxController {
  //* define controllers
  TextEditingController emailController = TextEditingController();

  //*clear controllers
  void clear() {
    emailController.clear();
  }

  @override
  void onClose() {
    super.onClose();
  }
}
