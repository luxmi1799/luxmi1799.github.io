class Recommendation {
  final String? name, source, text;

  Recommendation({this.name, this.source, this.text});
}

final List<Recommendation> demo_recommendations = [
  Recommendation(
    name: "Sameer Singh",
    source: "Linkedin",
    text:
        "I have had the pleasure of working with Luxmi on two flutter projects and what strikes me the most about her work is his ability to write clean and reusable codes with best practices. He is hardworking and makes it so easy to transcribe ideas into beautiful and testable flutter apps. She is a Flutter/Dart gem and has my highest recommendation",
  ),
  Recommendation(
    name: "Rakhi",
    source: "Linkedin",
    text:
        "Luxmi is great asset for any organization. It's a true pleasure working with her at Nippon Data. Her flutter skill is amazing as well as her professionalism and being a good team player. Luxmi's problem solving skill is also one of her great skills.",
  ),
];
