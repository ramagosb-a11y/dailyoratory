import type { DevotionCategory } from "@/types/devotions";

export const devotionCategories: DevotionCategory[] = [
  { id: "cat-marian", title: "Marian Devotions", slug: "marian", description: "Pray with Mary and contemplate Christ through her maternal witness.", iconName: "flower-2", sortOrder: 10, featured: true },
  { id: "cat-eucharistic", title: "Eucharistic Devotions", slug: "eucharistic", description: "Devotions centered on Christ truly present in the Eucharist.", iconName: "host", sortOrder: 20, featured: true },
  { id: "cat-jesus", title: "Devotions to Jesus", slug: "jesus", description: "Traditional prayers and practices centered directly on Christ's love and saving work.", iconName: "heart", sortOrder: 30, featured: true },
  { id: "cat-mercy", title: "Mercy and Reparation", slug: "mercy-reparation", description: "Practices of trust, repentance, intercession, and loving reparation.", iconName: "droplets", sortOrder: 40, featured: true },
  { id: "cat-saints", title: "Saint Devotions", slug: "saints", description: "Prayerful companionship with the saints, angels, and heavenly intercessors.", iconName: "shield", sortOrder: 50, featured: true },
  { id: "cat-seasonal", title: "Seasonal Devotions", slug: "seasonal", description: "Devotions especially fitted to Advent, Lent, Easter, and the rhythm of the year.", iconName: "calendar-heart", sortOrder: 60, featured: true },
  { id: "cat-family", title: "Family Devotions", slug: "family", description: "Simple devotional practices that can be shared in the home.", iconName: "home-heart", sortOrder: 70, featured: false },
  { id: "cat-novenas", title: "Novenas and Litanies", slug: "novenas-litanies", description: "Repeated forms of petition and praise that train perseverance and trust.", iconName: "list-prayer", sortOrder: 80, featured: true },
  { id: "cat-dead", title: "Devotions for the Dead", slug: "dead", description: "Prayer and sacrifice offered for the faithful departed.", iconName: "candles", sortOrder: 90, featured: true },
  { id: "cat-daily", title: "Daily Prayer Rhythms", slug: "daily-rhythm", description: "Short practices that help sanctify the hours of the day.", iconName: "clock-3", sortOrder: 100, featured: true },
];
