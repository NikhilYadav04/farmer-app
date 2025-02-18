import 'package:ai_plant_detecion/controllers/main/getX_appBar.dart';
import 'package:ai_plant_detecion/global/colors.dart';
import 'package:ai_plant_detecion/lists/pages_list.dart';
import 'package:ai_plant_detecion/widgets/appbar_screen_widgets.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class AppbarScreenMobile extends StatelessWidget {
  final appBarController controller = Get.put(appBarController());
  

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
          resizeToAvoidBottomInset: true,
          backgroundColor: screenBackgroundColorIndigo,
          //* AppBar
          appBar: appBar(() {}, controller, context),
          body: Obx(() => pages[controller.currentPage.value]),
          //* bottom navigation bar
          bottomNavigationBar: Obx(() => Theme(
                data: ThemeData(splashFactory: NoSplash.splashFactory,bottomAppBarTheme: BottomAppBarTheme(elevation: 0)),
                child: bottomBar(
                    controller.currentPage.value, controller, context),
              )),
        ),
    );
  }
}
