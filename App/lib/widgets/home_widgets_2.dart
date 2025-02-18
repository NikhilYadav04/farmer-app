import 'package:flutter/material.dart';

Widget chooseWidget(IconData icon,String title){
  return ListTile(
    leading: Icon(icon,size: 34,color: Colors.white,),
    title: Text(title,style: TextStyle(
      fontSize: 24,
      fontFamily: "CoreSansMed",
      color: Colors.white
    ),),
  );
}