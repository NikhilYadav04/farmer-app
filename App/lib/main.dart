import 'package:ai_plant_detecion/global/locale_var.dart';
import 'package:ai_plant_detecion/l10n/l10n.dart';
import 'package:ai_plant_detecion/responsive/responseiveLayout.dart';
import 'package:ai_plant_detecion/screens/onboard/onboard_screen_1_mobile.dart';
import 'package:ai_plant_detecion/screens/onboard/onboard_screen_1_tablet.dart';
import 'package:ai_plant_detecion/styling/sizeConfig.dart';
import 'package:device_preview/device_preview.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_navigation/src/root/get_material_app.dart';

void main() {
    WidgetsFlutterBinding.ensureInitialized();
  runApp(DevicePreview(enabled: !kReleaseMode, builder: (context) => MyApp()));
  //runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        SizeConfig().init(constraints);
        return GetMaterialApp(
            supportedLocales: L10n.all,
            locale: Get.deviceLocale,
            fallbackLocale: locale_app,
            localizationsDelegates: const [
              AppLocalizations.delegate,
              GlobalMaterialLocalizations.delegate,
              GlobalWidgetsLocalizations.delegate,
              GlobalCupertinoLocalizations.delegate,
            ],
            debugShowCheckedModeBanner: false,
            title: "AI Plant detecion",
            home: //OnboardScreen1Mobile());
             Responseivelayout(
                mobileBody: OnboardScreen1Mobile(),
                tabletBody: OnboardScreen1Tablet()));
      },
    );
  }
}
