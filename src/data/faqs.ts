/** Single source of truth: visible FAQ + JSON-LD must match. */
export const faqs = [
  {
    q: 'How does the Roobet lossback rate actually get decided?',
    a: `The percentage is negotiated case-by-case between Hugo and Roobet's VIP operations desk, based on three inputs: your verified monthly wager volume, the game mix you run (slots vs. originals vs. sportsbook each carry different blended edges), and the duration you intend to play under the structure. Players burning $15,000 to $150,000 per month typically land on the Big Player tier at 10%; volume above $150,000 unlocks the Whale Tier conversation, with rates negotiable up to 20% on net losses. Hugo presents the case to the VIP team — you don't have to argue your own rate.`,
  },
  {
    q: 'Does the lossback include my Roobet sportsbook losses too?',
    a: `Yes, that's one of the more valuable details of the deal. Most public Roobet rewards only count casino losses, but Hugo's structure can be configured to blend net losses across the sportsbook and the casino into a single weekly calculation. For players who hedge across slots, Crash, live tables and pre-match betting, this matters a lot — it means a brutal football Sunday is offset by the same lossback engine that covers a rough Crash session. Hugo confirms the included verticals during onboarding so there are no surprises in the first Monday statement.`,
  },
  {
    q: 'Are the Roobet originals (Crash, Mines, Plinko) eligible?',
    a: `All Roobet provably-fair originals are eligible by default — Crash, Mines, Towers, Plinko, Dice, Limbo, Roulette and Hash Dice. These tend to be the most popular games among Hugo's whale clients because the edge is low and the bet frequency is high, which produces a clean, predictable net-loss curve. The provably-fair seed pairs that Roobet publishes after each session also mean the underlying numbers are independently auditable, so there is no ambiguity about what counts toward your weekly net loss calculation.`,
  },
  {
    q: 'What kind of volume do I actually need to qualify?',
    a: `As a rough threshold, a sustained monthly wager of around $15,000 puts you in the Big Player band and unlocks the 10% rate. Significant volume — $150,000 per month and above — is where the Whale Tier conversation begins, with rates climbing toward the 20% maximum based on consistency. Hugo is open about edge cases: a player wagering less than $15k/month but with a strong sustained history can sometimes be onboarded on a starter rate, but the deal really makes financial sense for committed high-volume players. The fastest way to know is to send a short volume snapshot via Telegram.`,
  },
  {
    q: 'Why is this called "lossback" and not just rakeback?',
    a: `Rakeback rewards you for the volume you produce — typically a small percentage of the operator's edge taken from each bet, paid regardless of session outcome. Lossback is structurally different: it tracks your net loss (total wagered minus total returned) over the settlement window and pays a percentage of that figure back to you. The practical effect is asymmetric — when you have a good week, lossback pays little or nothing; when you have a brutal week, lossback returns a meaningful share of the damage. For players cycling six-figure monthly volume the lossback structure is mathematically far more valuable than rakeback at typical industry percentages.`,
  },
  {
    q: 'Is Hugo officially affiliated with Roobet?',
    a: `Hugo operates an authorised Roobet campaign account inside the Roobet partner programme. This is a B2B relationship between Hugo and Raw Entertainment N.V. (Roobet's operating entity) — it's distinct from being a generic affiliate. Campaign managers in this programme have a direct relationship with the VIP operations desk and are explicitly authorised to negotiate lossback structures on behalf of their managed players. Hugo's authorisation can be confirmed by messaging the official Telegram bot at @hugo_lossback_bot and asking for verification details, which he supplies upfront.`,
  },
  {
    q: 'How is my lossback paid? Which crypto, when?',
    a: `Lossback lands directly inside your Roobet account balance in your preferred cryptocurrency — Roobet supports Bitcoin, Ethereum, USDT, USDC, Litecoin, Solana, Tron and Dogecoin natively. Settlement happens every Monday, covering the previous Monday-through-Sunday window. Once it hits your balance you can withdraw to any compatible wallet at standard Roobet cashier speeds (typically under 10 minutes for major coins) with no additional wagering or holding requirement attached to the lossback amount itself.`,
  },
  {
    q: 'Are there any wagering or rollover conditions on the lossback?',
    a: `None. This is the single most important structural difference between lossback under Hugo's deal and a standard deposit bonus. The lossback amount is credited as immediately-withdrawable cash balance in crypto. There is no rollover multiplier, no game restriction list, no minimum odds requirement, no maximum cash-out clause. You can withdraw the entire amount the same Monday it's paid out, redeploy it as new wager volume, or just hold it. There are no clawback clauses either — once it's paid, it's yours.`,
  },
  {
    q: 'Is this available in my country?',
    a: `If you can legally hold a Roobet account in your country, you can join Hugo's lossback programme. Roobet.com is accessible in most jurisdictions globally except a handful of restricted territories — notably the United States, the United Kingdom, the Netherlands, Spain, Australia and France, where local gambling licensing prevents Roobet operating. Hugo currently has active whales onboarded across Canada, most of continental Europe, the LATAM region, the Middle East and parts of Asia. If you're unsure about your specific jurisdiction, mention it in your first Telegram message and Hugo will confirm.`,
  },
  {
    q: 'Roobet partners with a lot of streamers — does my account get any of that exposure?',
    a: `No, and that's by design. Roobet's streamer partnerships are a separate B2B arm of the business — those deals are commercial sponsorships, not playing structures, and they sit on completely different accounts than your personal play. Joining Hugo's lossback programme does not put your account into any kind of content rotation; your wagering history and tier remain strictly confidential between you, Hugo and the Roobet VIP desk. Whale clients value the privacy specifically — Hugo's book is run with the same discretion expected by anyone playing at this volume.`,
  },
  {
    q: 'What happens if I have a big winning week — do I owe anything back?',
    a: `No. Lossback is asymmetric on purpose: when you finish a week in profit, your net loss is zero or negative, and the lossback for that week is simply zero. There is no clawback against your winnings, no offset against future weeks, and no penalty mechanism for going positive. The next week's settlement starts cleanly from a fresh net-loss tally. The structure deliberately rewards you when you're down without penalising you when you're up — which is exactly why it pencils out for serious players over a multi-month horizon.`,
  },
]

export type FaqItem = { q: string; a: string }
