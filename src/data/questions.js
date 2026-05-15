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

// 30 forced-choice questions covering all 10 language pairs, 3 times each
// Shuffled so the same pair doesn't repeat back-to-back
export const QUESTIONS = [
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
];
