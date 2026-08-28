import type { RosaryMysteryGroupSlug } from "@/types/rosary";

export type RosaryViewpoint = {
  id: string;
  groupSlug: RosaryMysteryGroupSlug;
  mysteryIndex: number;
  title: string;
  src: string;
};

type MysteryViewpointGroup = {
  groupSlug: RosaryMysteryGroupSlug;
  mysteryIndex: number;
  folder: string;
  viewpoints: [title: string, filename: string][];
};

const viewpointGroups: MysteryViewpointGroup[] = [
  { groupSlug: "joyful-mysteries", mysteryIndex: 1, folder: "joyful/01_annunciation", viewpoints: [["From Mary's Prie-Dieu", "01_from_marys_prie_dieu.jpg"], ["Archangel Gabriel's Vantage", "02_archangel_gabriels_vantage.jpg"], ["Through the Quiet Workshop Archway", "03_through_quiet_workshop_archway.jpg"], ["The Descent of the Dove", "04_descent_of_the_dove.jpg"]] },
  { groupSlug: "joyful-mysteries", mysteryIndex: 2, folder: "joyful/02_visitation", viewpoints: [["Through Elizabeth's Eyes", "01_through_elizabeths_eyes.jpg"], ["Across the Judean Mountain Vista", "02_judean_mountain_vista.jpg"], ["From Zechariah's Silent Watch", "03_zechariahs_silent_watch.jpg"]] },
  { groupSlug: "joyful-mysteries", mysteryIndex: 3, folder: "joyful/03_nativity", viewpoints: [["From Inside the Manger", "01_from_inside_the_manger.jpg"], ["A Shepherd's Vantage at the Cave Entrance", "02_shepherd_at_cave_entrance.jpg"], ["Through Saint Joseph's Protective Eyes", "03_saint_joseph_protective_eyes.jpg"], ["Bethlehem Star Heavenly View", "04_bethlehem_star_heavenly_view.jpg"]] },
  { groupSlug: "joyful-mysteries", mysteryIndex: 4, folder: "joyful/04_presentation", viewpoints: [["From Simeon's Arms", "01_from_simeons_arms.jpg"], ["Across the Grand Temple Portico", "02_grand_temple_portico.jpg"], ["Anna the Prophetess Looking On", "03_anna_prophetess_looking_on.jpg"]] },
  { groupSlug: "joyful-mysteries", mysteryIndex: 5, folder: "joyful/05_finding_in_temple", viewpoints: [["Mary & Joseph at the Chamber Doors", "01_mary_joseph_chamber_doors.jpg"], ["From Among the Seated Scribes", "02_among_seated_scribes.jpg"], ["Through the Eyes of the Youthful Christ", "03_eyes_of_youthful_christ.jpg"]] },
  { groupSlug: "luminous-mysteries", mysteryIndex: 1, folder: "luminous/01_baptism", viewpoints: [["From John the Baptist's Hand", "01_john_the_baptists_hand.jpg"], ["From the Reeds of the Riverbank", "02_reeds_of_riverbank.jpg"], ["Descent of the Heavenly Light", "03_descent_heavenly_light.jpg"]] },
  { groupSlug: "luminous-mysteries", mysteryIndex: 2, folder: "luminous/02_cana", viewpoints: [["From the Servant's Ladle", "01_from_servants_ladle.jpg"], ["Beside Our Lady's Shoulder", "02_beside_our_ladys_shoulder.jpg"], ["From the Bridegroom's Banquet Table", "03_bridegrooms_banquet_table.jpg"]] },
  { groupSlug: "luminous-mysteries", mysteryIndex: 3, folder: "luminous/03_proclamation", viewpoints: [["From Among the Seated Crowds", "01_among_seated_crowds.jpg"], ["Through the Eyes of the Forgiven Penitent", "02_eyes_forgiven_penitent.jpg"], ["Panoramic Galilee Vista", "03_panoramic_galilee_vista.jpg"]] },
  { groupSlug: "luminous-mysteries", mysteryIndex: 4, folder: "luminous/04_transfiguration", viewpoints: [["From Peter's Prostrate View", "01_peters_prostrate_view.jpg"], ["Beside Moses and Elijah", "02_beside_moses_elijah.jpg"], ["Inside the Luminous Cloud (Shekinah)", "03_inside_luminous_cloud.jpg"]] },
  { groupSlug: "luminous-mysteries", mysteryIndex: 5, folder: "luminous/05_eucharist", viewpoints: [["From Saint John the Beloved's Stance", "01_saint_johns_stance.jpg"], ["Across the Passover Table", "02_across_passover_table.jpg"], ["Focus on the Elevated Chalice", "03_focus_elevated_chalice.jpg"]] },
  { groupSlug: "sorrowful-mysteries", mysteryIndex: 1, folder: "sorrowful/01_agony", viewpoints: [["From the Consoling Angel's Stance", "01_consoling_angels_stance.jpg"], ["From the Sleeping Disciples in the Shadows", "02_sleeping_disciples_shadows.jpg"], ["Kneeling Beside the Rock of Agony", "03_beside_rock_of_agony.jpg"]] },
  { groupSlug: "sorrowful-mysteries", mysteryIndex: 2, folder: "sorrowful/02_scourging", viewpoints: [["From the Base of the Marble Pillar", "01_base_marble_pillar.jpg"], ["From Pilate's Shadowed Archway", "02_pilates_shadowed_archway.jpg"], ["Through the Sobs of the Mother", "03_through_sobs_of_mother.jpg"]] },
  { groupSlug: "sorrowful-mysteries", mysteryIndex: 3, folder: "sorrowful/03_crowning", viewpoints: [["Direct Gaze into the Face of Christ (Ecce Homo)", "01_direct_gaze_ecce_homo.jpg"], ["From the Circle of Mocking Soldiers", "02_circle_mocking_soldiers.jpg"], ["Beside Pilate Presenting 'Ecce Homo'", "03_beside_pilate_ecce_homo.jpg"]] },
  { groupSlug: "sorrowful-mysteries", mysteryIndex: 4, folder: "sorrowful/04_carrying_cross", viewpoints: [["From Simon of Cyrene's Shoulder", "01_simon_cyrenes_shoulder.jpg"], ["From Veronica's Veil", "02_from_veronicas_veil.jpg"], ["Looking Down the Via Dolorosa", "03_down_via_dolorosa.jpg"]] },
  { groupSlug: "sorrowful-mysteries", mysteryIndex: 5, folder: "sorrowful/05_crucifixion", viewpoints: [["From the Foot of the Cross (Saint John's View)", "01_foot_cross_saint_john.jpg"], ["Through the Roman Centurion's Eyes", "02_roman_centurions_eyes.jpg"], ["Calvary Hilltop Panoramic Wide Shot", "03_calvary_panoramic.jpg"]] },
  { groupSlug: "glorious-mysteries", mysteryIndex: 1, folder: "glorious/01_resurrection", viewpoints: [["From Inside the Empty Tomb", "01_inside_empty_tomb.jpg"], ["Mary Magdalene Turning in the Garden", "02_mary_magdalene_garden.jpg"], ["From the Angel Sitting on the Rolled Stone", "03_angel_rolled_stone.jpg"]] },
  { groupSlug: "glorious-mysteries", mysteryIndex: 2, folder: "glorious/02_ascension", viewpoints: [["From the Circle of Kneeling Apostles", "01_circle_kneeling_apostles.jpg"], ["Through the Eyes of the Ascending Lord", "02_eyes_ascending_lord.jpg"], ["Beside the Two Angels in White", "03_two_angels_in_white.jpg"]] },
  { groupSlug: "glorious-mysteries", mysteryIndex: 3, folder: "glorious/03_pentecost", viewpoints: [["From Beside Our Lady in the Cenacle", "01_beside_our_lady_cenacle.jpg"], ["Through Saint Peter's Transformed Eyes", "02_saint_peters_transformed_eyes.jpg"], ["Descent of the Mighty Wind", "03_descent_mighty_wind.jpg"]] },
  { groupSlug: "glorious-mysteries", mysteryIndex: 4, folder: "glorious/04_assumption", viewpoints: [["From the Tomb of Blooming Lilies", "01_tomb_blooming_lilies.jpg"], ["From Among the Ascending Angelic Host", "02_among_angelic_host.jpg"], ["From the Gates of the Heavenly Jerusalem", "03_gates_heavenly_jerusalem.jpg"]] },
  { groupSlug: "glorious-mysteries", mysteryIndex: 5, folder: "glorious/05_coronation", viewpoints: [["From the Assembly of the Saints", "01_assembly_of_saints.jpg"], ["Beside the Throne of Christ", "02_beside_throne_christ.jpg"], ["Looking Up from the Pilgrim Earth", "03_pilgrim_earth.jpg"]] },
];

export const rosaryViewpoints: RosaryViewpoint[] = viewpointGroups.flatMap((group) =>
  group.viewpoints.map(([title, filename], index) => ({
    id: `${group.groupSlug}-${group.mysteryIndex}-${index + 1}`,
    groupSlug: group.groupSlug,
    mysteryIndex: group.mysteryIndex,
    title,
    src: `/images/rosary/viewpoints/${group.folder}/${filename}`,
  })),
);
