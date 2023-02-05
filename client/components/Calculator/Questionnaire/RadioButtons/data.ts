export interface CategoryProps {
  title: string;
  name: string;
  options: string[];
}

export var activity: CategoryProps = {
  title: "Vad är din aktivitetsnivå?",
  name: "activity",
  options: [
    "Stillasittande, ingen träning",
    "Mestadels stillasittande (kontorsarbete) + träning 3-6 dagar i veckan",
    "Lätt aktivitet (träning 3-6 dagar i veckan) + jobb som kräver fysisk aktivitet",
    "Hög aktivitet (träning 6-7 dagar i veckan) + jobb som kräver fysisk aktivitet",
  ],
};

export var goal: CategoryProps = {
  title: "Vad har du för mål?",
  name: "goal",
  options: [
    "Deff - viktminsking med fokus på fettförbränning",
    "Omfördelning - bibehållande av vikt med fokus på muskeltillväxt och fettförbränning",
    "Muskeltillväxt - viktökning med fokus på muskeltillväxt",
  ],
};

export var experience: CategoryProps = {
  title: "Vad har du för erfarenhet?",
  name: "experience",
  options: [
    "Nybörjare - helt ny till träning",
    "Medel - ökar belastningen i gymmet på veckobasis",
    "Intermediär - ökar belastningen i gymmet på månadsbasis",
    "Avancerad - framsteg går endast att se över månader eller ett år",
  ],
};
