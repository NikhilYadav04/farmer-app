import 'package:ai_plant_detecion/styling/appTheme.dart';
import 'package:ai_plant_detecion/widgets/home_widgets_2.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';

class appBarController extends GetxController {

  //* profile photo add
  void addPhoto(){
    Get.bottomSheet(
      Container(
        height: 280,
        decoration: BoxDecoration(
          color: AppTheme.containerColor,
          borderRadius: BorderRadius.only(topLeft: Radius.circular(25),topRight: Radius.circular(25))
        ),
        child: Column(
          children: [
            SizedBox(height: 10,),
            Divider(height: 10,color: Colors.white,indent: 160,endIndent: 160,thickness: 5,),
            SizedBox(height: 20,),
            Image.asset("assets/icons/account.png",height: 80,width: 80,),
            SizedBox(height: 15,),
            chooseWidget(Icons.camera_alt, "Choose from camera"),
             SizedBox(height: 15,),
            chooseWidget(Icons.photo, "Choose from gallery"),
          ],
        ),
      )
    );
  }

  //*index for appbar icons
  RxInt currentPage = 0.obs;

  //*for changing index between pages
  void changeIndex(index) {
    currentPage.value = index;
    print(currentPage);
  }

  //*appBar text acc to currentPage
  String appBarText(BuildContext context) {
    return currentPage == 0
        ? AppLocalizations.of(context)!.bottomBarDiagnose
        : AppLocalizations.of(context)!.bottomBarHistory;
  }

  void onClose() {
    super.onClose();
  }
}
