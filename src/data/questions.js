export const LANGUAGES = {
  words: {
    name: "Words of Affirmation",
    short: "WORDS",
    color: "#c678dd",
    description:
      "Verbal expressions of love — compliments, encouragement, and sincere words — fill your heart more than anything else.",
  },
  acts: {
    name: "Acts of Service",
    short: "ACTS",
    color: "#98c379",
    description:
      "When others do things for you — helping with tasks, making your life easier — you feel most deeply cared for.",
  },
  gifts: {
    name: "Receiving Gifts",
    short: "GIFTS",
    color: "#e5c07b",
    description:
      "Thoughtful gifts — symbolic tokens of love and remembrance — make you feel cherished and truly known.",
  },
  time: {
    name: "Quality Time",
    short: "TIME",
    color: "#61afef",
    description:
      "Undivided attention and shared experiences speak louder than words — your love language is presence.",
  },
  touch: {
    name: "Physical Touch",
    short: "TOUCH",
    color: "#e06c75",
    description:
      "Physical connection — hugs, closeness, a hand on the shoulder — is how you most naturally give and receive love.",
  },
};

// 50 forced-choice questions covering all 10 language pairs, 5 times each
export const QUESTIONS = [
  // ── Round 1 ────────────────────────────────────────────────
  {
    id: 1,
    optionA: { text: "Someone tells me they appreciate me.", lang: "words" },
    optionB: { text: "Someone does something helpful for me without being asked.", lang: "acts" },
  },
  {
    id: 2,
    optionA: { text: "A meaningful gift shows me someone was thinking about me.", lang: "gifts" },
    optionB: { text: "Physical affection makes me feel more loved than any gift could.", lang: "touch" },
  },
  {
    id: 3,
    optionA: { text: "Compliments and encouraging words lift my spirits most.", lang: "words" },
    optionB: { text: "Having someone's undivided attention means everything to me.", lang: "time" },
  },
  {
    id: 4,
    optionA: { text: "Acts of service speak louder to me than words ever could.", lang: "acts" },
    optionB: { text: "Physical closeness reassures me more than anything.", lang: "touch" },
  },
  {
    id: 5,
    optionA: { text: "A carefully chosen gift shows me I am known and loved.", lang: "gifts" },
    optionB: { text: "Spending uninterrupted time together means more than any object.", lang: "time" },
  },
  {
    id: 6,
    optionA: { text: "Kind words and verbal affirmation make me feel secure.", lang: "words" },
    optionB: { text: "A warm hug or holding hands makes me feel most connected.", lang: "touch" },
  },
  {
    id: 7,
    optionA: { text: "I appreciate when someone goes out of their way to help me.", lang: "acts" },
    optionB: { text: "Unexpected surprises and gifts show me someone cares.", lang: "gifts" },
  },
  {
    id: 8,
    optionA: { text: "Being fully present with someone, no distractions, is the greatest gift.", lang: "time" },
    optionB: { text: "A touch on the shoulder communicates love better than time alone.", lang: "touch" },
  },
  {
    id: 9,
    optionA: { text: "Hearing 'I love you' or 'I'm proud of you' means the world to me.", lang: "words" },
    optionB: { text: "Receiving a thoughtful gift makes me feel truly cared for.", lang: "gifts" },
  },
  {
    id: 10,
    optionA: { text: "When someone takes tasks off my plate, I feel deeply loved.", lang: "acts" },
    optionB: { text: "Setting aside quality one-on-one time is the most meaningful thing.", lang: "time" },
  },
  // ── Round 2 ────────────────────────────────────────────────
  {
    id: 11,
    optionA: { text: "I treasure words of encouragement and affirmation above all else.", lang: "words" },
    optionB: { text: "Being physically close — snuggles, holding hands — feels most loving.", lang: "touch" },
  },
  {
    id: 12,
    optionA: { text: "Someone helping with chores or errands without being asked means a lot.", lang: "acts" },
    optionB: { text: "A surprise gift, big or small, reminds me I am valued.", lang: "gifts" },
  },
  {
    id: 13,
    optionA: { text: "Spending distraction-free time together is how I feel most loved.", lang: "time" },
    optionB: { text: "Physical touch — a hug, a squeeze — is the most direct way to show love.", lang: "touch" },
  },
  {
    id: 14,
    optionA: { text: "When someone expresses their feelings for me, I feel truly special.", lang: "words" },
    optionB: { text: "Shared experiences and focused time together fill my heart.", lang: "time" },
  },
  {
    id: 15,
    optionA: { text: "When someone goes out of their way to serve me, I feel deeply loved.", lang: "acts" },
    optionB: { text: "Physical contact — a hug or a gentle touch — communicates love most clearly.", lang: "touch" },
  },
  {
    id: 16,
    optionA: { text: "When someone remembers an occasion and gets me a gift, I feel truly seen.", lang: "gifts" },
    optionB: { text: "Focused quality time, free from distractions, is more valuable than any gift.", lang: "time" },
  },
  {
    id: 17,
    optionA: { text: "Verbal praise and encouragement keeps me feeling loved.", lang: "words" },
    optionB: { text: "Someone stepping in to help makes me feel cared for deeply.", lang: "acts" },
  },
  {
    id: 18,
    optionA: { text: "A thoughtful gift, even something small, shows me I'm on someone's mind.", lang: "gifts" },
    optionB: { text: "A warm embrace or a hand on my arm reassures me more than any gift.", lang: "touch" },
  },
  {
    id: 19,
    optionA: { text: "Written notes or spoken words of love mean the most to me.", lang: "words" },
    optionB: { text: "Unexpected surprises and gifts show me someone cares about me.", lang: "gifts" },
  },
  {
    id: 20,
    optionA: { text: "I feel most loved when people take action to make my life easier.", lang: "acts" },
    optionB: { text: "Dedicated one-on-one time, with full attention, means the world to me.", lang: "time" },
  },
  // ── Round 3 ────────────────────────────────────────────────
  {
    id: 21,
    optionA: { text: "Love letters or meaningful words I can revisit make me feel cherished.", lang: "words" },
    optionB: { text: "A reassuring touch or physical presence during hard times means everything.", lang: "touch" },
  },
  {
    id: 22,
    optionA: { text: "When someone puts effort into helping me, I know they love me.", lang: "acts" },
    optionB: { text: "Thoughtful gifts — ones that show someone really knows me — feel deeply meaningful.", lang: "gifts" },
  },
  {
    id: 23,
    optionA: { text: "Nothing says love more than someone's full, undivided attention.", lang: "time" },
    optionB: { text: "A spontaneous hug or gentle touch communicates care better than anything else.", lang: "touch" },
  },
  {
    id: 24,
    optionA: { text: "A heartfelt 'thank you' or sincere compliment fills me with joy.", lang: "words" },
    optionB: { text: "Practical help — a home-cooked meal, fixing something — shows true love.", lang: "acts" },
  },
  {
    id: 25,
    optionA: { text: "I feel most appreciated when someone finds a truly meaningful gift.", lang: "gifts" },
    optionB: { text: "Physical nearness and touch make me feel safe and loved.", lang: "touch" },
  },
  {
    id: 26,
    optionA: { text: "Seeing someone sacrifice their time to help with my needs feels like true love.", lang: "acts" },
    optionB: { text: "Planning and sharing new experiences together is the best way to bond.", lang: "time" },
  },
  {
    id: 27,
    optionA: { text: "Words of encouragement during hard times mean more to me than any gift.", lang: "words" },
    optionB: { text: "A gift that shows someone listened and truly remembered is deeply meaningful.", lang: "gifts" },
  },
  {
    id: 28,
    optionA: { text: "Knowing someone took time to do something for me means a lot.", lang: "acts" },
    optionB: { text: "Physical affection — hugs, closeness — is how I most naturally receive love.", lang: "touch" },
  },
  {
    id: 29,
    optionA: { text: "I cherish keepsakes and tokens of love more than most people might.", lang: "gifts" },
    optionB: { text: "Long, uninterrupted conversations feel more connecting than any material thing.", lang: "time" },
  },
  {
    id: 30,
    optionA: { text: "A sincere compliment or word of affirmation stays with me for days.", lang: "words" },
    optionB: { text: "Spending quality time doing something we both enjoy brings us closest.", lang: "time" },
  },
  // ── Round 4 ────────────────────────────────────────────────
  {
    id: 31,
    optionA: { text: "Someone narrating what they love about me lifts me up more than anything.", lang: "words" },
    optionB: { text: "Someone quietly taking something off my to-do list lifts me up more than anything.", lang: "acts" },
  },
  {
    id: 32,
    optionA: { text: "A personal, heartfelt message inside a card touches me more than the gift itself.", lang: "words" },
    optionB: { text: "A perfectly chosen object that shows someone paid close attention touches me most.", lang: "gifts" },
  },
  {
    id: 33,
    optionA: { text: "Deep conversations where we really open up and listen feel most intimate to me.", lang: "words" },
    optionB: { text: "Quietly sharing the same space, comfortable and unhurried, feels most intimate.", lang: "time" },
  },
  {
    id: 34,
    optionA: { text: "Soft spoken reassurance during a difficult moment is what grounds me most.", lang: "words" },
    optionB: { text: "Being physically held or comforted during a difficult moment grounds me most.", lang: "touch" },
  },
  {
    id: 35,
    optionA: { text: "Someone preparing a surprise treat or my favorite meal shows they care.", lang: "acts" },
    optionB: { text: "Someone sourcing or gifting me my favorite thing shows they care.", lang: "gifts" },
  },
  {
    id: 36,
    optionA: { text: "I feel most cared for when someone quietly handles things I've been dreading.", lang: "acts" },
    optionB: { text: "I feel most cared for when someone carves out an evening just to be with me.", lang: "time" },
  },
  {
    id: 37,
    optionA: { text: "When someone anticipates my needs and quietly acts on them without being asked.", lang: "acts" },
    optionB: { text: "When someone reaches out and initiates a hug or puts a hand on my shoulder.", lang: "touch" },
  },
  {
    id: 38,
    optionA: { text: "A personalized item that captures a shared memory moves me deeply.", lang: "gifts" },
    optionB: { text: "A day set aside entirely for us, with nowhere else to be, moves me deeply.", lang: "time" },
  },
  {
    id: 39,
    optionA: { text: "I light up when I receive something that shows how well someone knows my tastes.", lang: "gifts" },
    optionB: { text: "I light up when someone gives me their full, undivided, undistracted attention.", lang: "time" },
  },
  {
    id: 40,
    optionA: { text: "A surprise gift left for me to find unexpectedly brightens my whole day.", lang: "gifts" },
    optionB: { text: "An unexpected hug or spontaneous touch brightens my whole day.", lang: "touch" },
  },
  // ── Round 5 ────────────────────────────────────────────────
  {
    id: 41,
    optionA: { text: "Doing an activity side by side — even something routine — makes me feel truly close.", lang: "time" },
    optionB: { text: "Easy, natural physical contact during an activity makes me feel truly close.", lang: "touch" },
  },
  {
    id: 42,
    optionA: { text: "Someone remembering and referencing something I said weeks ago makes me feel seen.", lang: "words" },
    optionB: { text: "Someone rearranging their whole schedule just to make time for me makes me feel seen.", lang: "time" },
  },
  {
    id: 43,
    optionA: { text: "I feel most bonded after a long, honest, vulnerable conversation.", lang: "words" },
    optionB: { text: "I feel most bonded after a long, warm, comfortable embrace.", lang: "touch" },
  },
  {
    id: 44,
    optionA: { text: "When someone inconveniences themselves to do something for me, I feel deeply loved.", lang: "acts" },
    optionB: { text: "When someone splurges on or hunts down something they know I'd love.", lang: "gifts" },
  },
  {
    id: 45,
    optionA: { text: "Acts of practical support — cooking, fixing, organizing — feel most loving to me.", lang: "acts" },
    optionB: { text: "Consistent, attentive presence — even just sitting with me — feels most loving.", lang: "time" },
  },
  {
    id: 46,
    optionA: { text: "Feeling cared for means someone doing something concrete and tangible for me.", lang: "acts" },
    optionB: { text: "Feeling cared for means someone being physically close and present with me.", lang: "touch" },
  },
  {
    id: 47,
    optionA: { text: "Knowing someone thinks highly of me and says so openly means the world to me.", lang: "words" },
    optionB: { text: "Knowing someone thought of me while out and brought something back means the world.", lang: "gifts" },
  },
  {
    id: 48,
    optionA: { text: "Gifts that double as keepsakes or mementos feel especially meaningful to me.", lang: "gifts" },
    optionB: { text: "Physical closeness during a quiet, calm moment feels especially meaningful to me.", lang: "touch" },
  },
  {
    id: 49,
    optionA: { text: "I feel most appreciated when someone steps in to handle something stressful for me.", lang: "acts" },
    optionB: { text: "I feel most appreciated when someone gifts me something they spent real effort finding.", lang: "gifts" },
  },
  {
    id: 50,
    optionA: { text: "I feel most loved during long stretches of undivided, unhurried time together.", lang: "time" },
    optionB: { text: "I feel most loved when physical affection is a natural, constant thread in the day.", lang: "touch" },
  },
];
