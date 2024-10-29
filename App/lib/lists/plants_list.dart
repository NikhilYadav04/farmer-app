import 'package:ai_plant_detecion/global/colors.dart';
import 'package:ai_plant_detecion/styling/sizeConfig.dart';
import 'package:flutter/material.dart';

List<DropdownMenuItem<String>> plants_en= [
  DropdownMenuItem(
    child: Text(
      "Potato",
      style: style,
    ),
    value: "Potato",
  ),
  DropdownMenuItem(
    child: Text(
      "Tomato",
      style: style,
    ),
    value: "Tomato",
  ),
  DropdownMenuItem(
    child: Text(
      "Strawberry",
      style: style,
    ),
    value: "Strawberry",
  ),
  DropdownMenuItem(
    child: Text(
      "Cherry",
      style: style,
    ),
    value: "Cherry",
  ),
];

List<DropdownMenuItem> plants_hi = [
  DropdownMenuItem(
    child: Text(
      "आलू",  // Potato
      style: style,
    ),
    value: "आलू",
  ),
  DropdownMenuItem(
    child: Text(
      "टमाटर",  // Tomato
      style: style,
    ),
    value: "टमाटर",
  ),
  DropdownMenuItem(
    child: Text(
      "स्ट्रॉबेरी",  // Strawberry
      style: style,
    ),
    value: "स्ट्रॉबेरी",
  ),
  DropdownMenuItem(
    child: Text(
      "चेरी",  // Cherry
      style: style,
    ),
    value: "चेरी",
  ),
];

List<DropdownMenuItem> plants_mr = [
  DropdownMenuItem(
    child: Text(
      "बटाटा",  // Potato
      style: style,
    ),
    value: "बटाटा",
  ),
  DropdownMenuItem(
    child: Text(
      "टोमॅटो",  // Tomato
      style: style,
    ),
    value: "टोमॅटो",
  ),
  DropdownMenuItem(
    child: Text(
      "स्ट्रॉबेरी",  // Strawberry
      style: style,
    ),
    value: "स्ट्रॉबेरी",
  ),
  DropdownMenuItem(
    child: Text(
      "चेरी",  // Cherry
      style: style,
    ),
    value: "चेरी",
  ),
];

TextStyle style =
    TextStyle(color: screenBackgroundColorGreen, fontFamily: "CoreSansMed",fontSize: 1.90 * SizeConfig.heightMultiplier);
