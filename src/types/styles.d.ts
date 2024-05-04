type Ratio = "logo" | "1x1" | "3x2" | "4x3" | "3x4" | "16x9" | "2x1" | "16x20" | "14x16" | "116x34" | "362x268";

type FontWeightStyle = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

type FontSizeStyle =
  | "fs10"
  | "fs12"
  | "fs14"
  | "fs16"
  | "fs18"
  | "fs24"
  | "fs28"
  | "fs32"
  | "fs40"
  | "fs48"
  | "fs56"
  | "fs64"
  | "fs72";

type TextStyle =
  | "uppercase"
  | "capitalize"
  | "underline"
  | "italic"
  | "center"
  | "justify"
  | "normal"
  | "right"
  | "left"
  | "lineThrough"
  | "nowrap";

type ColorStyle = "white" | "black" | "electricCrimson" | "eerieBlack" | "atomicTangerine" |  "gunMetal" | "curuleanBlue" | "charcoal" |  "coolGrey";

type FontFamily = "workSans";

type GeneralTextStyle = FontWeightStyle | TextStyle | ColorStyle | FontFamily | FontSizeStyle;
