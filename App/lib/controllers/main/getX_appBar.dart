import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';

class appBarController extends GetxController {
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
        ? AppLocalizations.of(context)!.bottomBarHome
        : currentPage == 1
            ? AppLocalizations.of(context)!.bottomBarDiagnose
            : currentPage == 2
                ? AppLocalizations.of(context)!.bottomBarSHop
                : currentPage == 3
                    ? AppLocalizations.of(context)!.bottomBarHistory
                    : "";
  }

  void onClose() {
    super.onClose();
  }
}
