// 1. Question Bank
const questionBank = [
    { q: "What Pokemon is the mascot of Pokemon?", a: ["Pichu", "Charizard", "Eevee", "Pikachu"], correct: 3 },
    { q: "Which token is used for single-line comments?", a: ["//", "/*", "<!--", "#"], correct: 0 },
    { q: "How do you declare a constant variable?", a: ["const", "let", "var", "constant"], correct: 0 },
    { q: "Which data type is a true/false value?", a: ["Boolean", "String", "Number", "Null"], correct: 0 },
    { q: "What does DOM stand for?", a: ["Document Object Model", "Data Object Modifier", "Display Order Management", "Document Order Model"], correct: 0 },
    { q: "who is the father of accounting", a: ["Luca Paciulo", "Adam Smith", "Luca Pacioli", "Henry Ford"], correct: 2 },
    { q: "Which account represents money earned from selling goods?", a: ["Revenue", "Expense", "Liability", "Drawing"], correct: 0 },
    { q: "What is the normal balance of an asset account?", a: ["Credit", "Debit", "Neither debit nor credit", "Both always equal zero"], correct: 1 },
    { q: "Which is an example of an expense?", a: ["Cash", "Equipment", "Rent expense", "Accounts receivable"], correct: 2 },
    { q: "What does accounts receivable mean?", a: ["Money the business owes suppliers", "Money customers owe the business", "Money invested by the owner", "Cash paid for salaries"], correct: 1 },
    { q: "Who is considered the owner of a sole proprietorship?", a: ["The government", "A group of shareholders", "One individual", "A board of directors"], correct: 2 },
    { q: "What is bookkeeping?", a: ["Advertising products", "Recording financial transactions", "Hiring workers", "Preparing business plans only"], correct: 1 },
    { q: "Which account increases when a business earns service revenue in cash?", a: ["Cash and service revenue", "Accounts payable and expenses", "Drawing and liabilities", "Equipment and accounts payable"], correct: 0 },
    { q: "What is owner's equity?", a: ["The owner's claim on business assets after liabilities", "All business debts", "Total operating expenses", "Money owed by customers"], correct: 0 },
    { q: "If assets are ₱50,000 and liabilities are ₱20,000, what is owner's equity?", a: ["₱70,000", "₱30,000", "₱20,000", "₱50,000"], correct: 1 },
    { q: "Which book records transactions in chronological order?", a: ["Ledger", "Journal", "Balance sheet", "Income statement"], correct: 1 },
    { q: "What is accountancy?", a: ["The study of human behavior", "The process of recording and analyzing financial transactions", "The study of government", "The process of producing goods"], correct: 1 },
    { q: "Which of the following is an asset?", a: ["Cash", "Loan payable", "Accounts payable", "Debt"], correct: 0 },
    { q: "What is the basic accounting equation?", a: ["Assets = Liabilities + Owner’s Equity", "Assets = Expenses + Income", "Income = Assets + Liabilities", "Liabilities = Assets + Revenue"], correct: 0 },
    { q: "Which financial statement shows a company's profit or loss?", a: ["Balance Sheet", "Income Statement", "Cash Receipt", "Purchase Order"], correct: 1 },
    { q: "What is a liability?", a: ["Money earned by a business", "Property owned by a business", "An amount owed by a business", "The owner's investment"], correct: 2 },
    { q: "Which of the following is an example of revenue?", a: ["Rent expense", "Sales income", "Electricity bill", "Loan payment"], correct: 1 },
    { q: "What is the main purpose of bookkeeping?", a: ["To record financial transactions", "To advertise products", "To hire employees", "To manufacture goods"], correct: 0 },
    { q: "Which account increases when a business earns service revenue in cash?", a: ["Cash", "Accounts Payable", "Rent Expense", "Loan Payable"], correct: 0 },
    { q: "What is owner's equity?", a: ["The total amount of business debts", "The owner's remaining interest in the business after liabilities", "The business's total expenses", "The money owed to suppliers"], correct: 1 },
    { q: "Which of the following is an expense?", a: ["Capital", "Accounts Receivable", "Rent", "Sales Revenue"], correct: 2 },
    { q: "A company provided consulting services worth $4,500 in December, but the client has not yet been billed, and no cash has been received. Which adjusting journal entry is required at December 31?", a: ["Debit Unearned Revenue for $4,500 and credit Consulting Revenue for $4,500", "Debit Cash for $4,500 and credit Consulting Revenue for $4,500", "Debit Accounts Receivable for $4,500 and credit Consulting Revenue for $4,500", "Debit Consulting Revenue for $4,500 and credit Accounts Receivable for $4,500"], correct: 2 },
    { q: "On October 1, a company paid $12,000 cash for a 1-year insurance policy covering the upcoming year, debiting Prepaid Insurance. If the company fails to make the necessary adjusting entry on December 31, what is the impact on the financial statements?", a: ["Net income is understated by $9,000, and total assets are overstated by $9,000.", "Net income is unaffected, but total liabilities are understated.", "Net income is overstated by $3,000, and total assets are understated by $3,000.", "Net income is overstated by $9,000, and total assets are overstated by $9,000."], correct: 3 },
    { q: "Which of the following accounts normally holds a debit balance?", a: ["Accounts Payable", "Common Stock", "Cash", "Revenue"], correct: 2 },
    { q: "How do you record an increase in a liability account?", a: ["Debit", "Transfer", "Adjustment", "Credit"], correct: 3 },
    { q: "A company purchases office equipment for $5,000 in cash. How does this transaction affect the accounts?", a: ["Equipment increases by $5,000 and Cash decreases by $5,000", "Equipment increases by $5,000 and Liabilities increase by $5,000", "Equipment increases by $5,000 and Equity increases by $5,000", "Cash increases by $5,000 and Equipment decreases by $5,000"], correct: 0 },
    { q: "Which principle requires that expenses be recorded in the same period as the revenues they helped to generate?", a: ["Revenue Recognition Principle", "Matching Principle", "Historical Cost Principle", "Economic Entity Assumption"], correct: 1 },
    { q: "The accounting principle that states assets should be recorded at their original purchase price, rather than their current market value, is called:", a: ["Full Disclosure Principle", "Going Concern Principle", "Historical Cost Principle", "Time Period Assumption"], correct: 2 },
    { q: "Which financial statement reports a company's revenues and expenses over a specific period of time?", a: ["Balance Sheet", "Statement of Cash Flows", "Income Statement", "Statement of Retained Earnings"], correct: 2 },
    { q: "In preparing a bank reconciliation, which of the following items requires an adjusting journal entry on the company’s books?", a: ["Outstanding checks", "Deposits in transit", "A customer’s NSF (Non-Sufficient Funds) check returned by the bank", "A bank error where the bank mistakenly credited the company’s account"], correct: 2 },
    { q: "The Statement of Cash Flows categorizes cash activities into which three types?", a: ["Current, Fixed, and Long-Term", "Operating, Investing, and Financing", "Revenue, Expense, and Net Income", "Assets, Liabilities, and Equity"], correct: 1 },
    { q: "Which account is credited when a business receives cash from a customer for services to be performed later?", a: ["Cash", "Unearned Revenue", "Accounts Receivable", "Service Revenue"], correct: 1 },
    { q: "What is the purpose of a trial balance?", a: ["To show only revenue and expenses", "To sum all ledger balances to check for errors", "To calculate taxes owed", "To list only cash transactions"], correct: 1 },
    { q: "Which of the following is a contra-asset account?", a: ["Accumulated Depreciation", "Notes Payable", "Prepaid Rent", "Inventory"], correct: 0 },
    { q: "What does FOB shipping point mean?", a: ["The seller pays shipping costs", "The buyer pays shipping costs", "Shipping is free", "The item is delivered after payment"], correct: 1 },
    { q: "Which account is increased by a credit?", a: ["Cash", "Accounts Receivable", "Sales Revenue", "Office Supplies"], correct: 2 },
    { q: "Which statement lists the ending balances of assets, liabilities, and owner's equity at a point in time?", a: ["Income Statement", "Statement of Cash Flows", "Balance Sheet", "Worksheet"], correct: 2 },
    { q: "What is depreciation?", a: ["The allocation of the cost of a long-term asset over its useful life", "The selling price of equipment", "The amount owed to creditors", "An increase in inventory value"], correct: 0 },
    { q: "Which of the following best describes accrued expenses?", a: ["Expenses incurred but not yet paid", "Expenses already paid in advance", "Revenue earned but not yet received", "Cash collections from customers"], correct: 0 },
    { q: "A debit to an asset account will usually:", a: ["Decrease the asset", "Increase the asset", "Decrease liabilities", "Increase owner's equity"], correct: 1 },
    { q: "What is the normal balance of a liability account?", a: ["Debit", "Credit", "Neither", "Zero"], correct: 1 },
    { q: "Which of the following is classified as an operating activity on the statement of cash flows?", a: ["Buying equipment", "Issuing stock", "Collecting cash from customers", "Paying dividends"], correct: 2 },
    { q: "If a company pays cash for office supplies, what happens to cash and supplies?", a: ["Cash decreases; Supplies increases", "Cash increases; Supplies decreases", "Cash decreases; Supplies decreases", "Cash increases; Supplies increases"], correct: 0 },
    { q: "What is retained earnings?", a: ["The amount the owner contributes to the business", "Cumulative profits kept in the business", "Current liabilities due within one year", "Cash held for emergencies"], correct: 1 },
    { q: "Which financial statement shows how cash moved in and out of a business?", a: ["Statement of Cash Flows", "Balance Sheet", "General Journal", "Statement of Retained Earnings"], correct: 0 },
    { q: "The cost of inventory sold to customers is called:", a: ["Operating expense", "Cost of goods sold", "Accounts payable", "Inventory asset"], correct: 1 },
    { q: "Which document shows a company's assets, liabilities, and equity at a specific date?", a: ["Income Statement", "General Ledger", "Balance Sheet", "Cash Budget"], correct: 2 },
    { q: "Which account is debited when equipment is purchased using cash?", a: ["Cash", "Equipment", "Accounts Payable", "Revenue"], correct: 1 },
    { q: "What is the formula for gross profit?", a: ["Sales - Cost of Goods Sold", "Assets - Liabilities", "Revenue - Expenses", "Cash + Accounts Receivable"], correct: 0 },
    { q: "Which type of business organization is legally separate from its owners?", a: ["Sole proprietorship", "Partnership", "Corporation", "Single-member LLC"], correct: 2 },
    { q: "When a company records a sale on account, which accounts are involved?", a: ["Cash and Revenue", "Accounts Receivable and Revenue", "Inventory and Accounts Payable", "Equipment and Cash"], correct: 1 },
    { q: "Which principle says revenue should be recognized when earned, not necessarily when cash is received?", a: ["Matching Principle", "Revenue Recognition Principle", "Materiality", "Consistency Principle"], correct: 1 },
    { q: "What happens when a company pays a liability?", a: ["Assets increase and liabilities decrease", "Assets decrease and liabilities decrease", "Assets decrease and equity increases", "Liabilities increase and equity decreases"], correct: 1 },
    { q: "Which of the following is an example of a current asset?", a: ["Building", "Machinery", "Inventory", "Land"], correct: 2 },
    { q: "Which account is credited when a business receives payment from a customer on an account receivable?", a: ["Accounts Receivable", "Cash", "Sales", "Inventory"], correct: 0 },
    { q: "What is the purpose of an adjusting entry?", a: ["To record transactions that occurred but were not yet entered", "To close temporary accounts", "To reduce asset balances to zero", "To record only cash transactions"], correct: 0 },
    { q: "What is the normal balance of an expense account?", a: ["Credit", "Debit", "Zero", "Either credit or debit"], correct: 1 },
    { q: "Which report is used to evaluate profitability over a period of time?", a: ["Balance Sheet", "Income Statement", "Bank Reconciliation", "Ledger"], correct: 1 },
    { q: "Which account is classified as a long-term liability?", a: ["Salaries Payable", "Accounts Payable", "Mortgage Payable", "Taxes Payable"], correct: 2 },
    { q: "What does the term accrual mean in accounting?", a: ["Recording revenues and expenses when they occur", "Only recording cash transactions", "Ignoring unpaid bills", "Recording only taxes"], correct: 0 },
    { q: "Which account is decreased by a credit?", a: ["Liability", "Expense", "Revenue", "Owner's Capital"], correct: 1 },
    { q: "What is the purpose of an income statement?", a: ["To show financial position at a point in time", "To report revenues and expenses for a period", "To list cash inflows and outflows", "To summarize owner withdrawals"], correct: 1 },
    { q: "Which of the following best describes prepaid expenses?", a: ["Expenses that are owed but unpaid", "Assets paid for in advance", "Revenue received before earning it", "An account used to track bad debts"], correct: 1 },
    { q: "What is the normal balance of an asset account?", a: ["Credit", "Debit", "Either debit or credit", "Neither"], correct: 1 },
    { q: "Which account is classified as a contra-equity account?", a: ["Drawing", "Accumulated Depreciation", "Accounts Receivable", "Unearned Revenue"], correct: 0 },
    { q: "Which of these indicates a business is profitable?", a: ["Net income is positive", "Cash is always positive", "Assets are greater than liabilities", "Inventory is increasing"], correct: 0 },
    { q: "What is the role of the general ledger?", a: ["To record only cash transactions", "To organize all accounts and balances", "To prepare tax returns", "To calculate payroll"], correct: 1 },
    { q: "If a company borrows money from a bank, which account increases?", a: ["Cash and notes payable", "Inventory and revenue", "Expense and owner’s equity", "Accounts receivable and drawings"], correct: 0 },
    { q: "What is the purpose of the closing process?", a: ["To close all asset accounts", "To reset temporary accounts to zero", "To record all customer payments", "To increase cash balance"], correct: 1 }
];

const hardQuestionBank = [
    { q: "A company receives a $20,000 note from a customer in exchange for services. What is the correct journal entry?", a: ["Debit Notes Receivable $20,000; Credit Service Revenue $20,000", "Debit Cash $20,000; Credit Notes Receivable $20,000", "Debit Service Revenue $20,000; Credit Notes Receivable $20,000", "Debit Accounts Receivable $20,000; Credit Notes Receivable $20,000"], correct: 0 },
    { q: "If a company fails to record accrued interest expense, which statement is true?", a: ["Liabilities are understated and net income is overstated", "Liabilities are overstated and net income is understated", "Assets are understated and equity is understated", "Expenses are understated and cash is overstated"], correct: 0 },
    { q: "A $12,000 machine is purchased with a 5-year useful life and no salvage value. Using straight-line depreciation, what is annual depreciation?", a: ["$1,200", "$2,000", "$2,400", "$12,000"], correct: 1 },
    { q: "Which adjustment is required when a company has earned revenue but has not yet collected cash?", a: ["Credit Accounts Receivable and debit Revenue", "Debit Accounts Receivable and credit Revenue", "Debit Cash and credit Revenue", "Debit Revenue and credit Cash"], correct: 1 },
    { q: "A company has beginning inventory of $30,000, purchases of $90,000, and ending inventory of $25,000. What is cost of goods sold?", a: ["$95,000", "$85,000", "$115,000", "$120,000"], correct: 1 },
    { q: "Which is the correct effect of a credit to Accounts Payable?", a: ["Decreases liabilities", "Increases liabilities", "Increases assets", "Decreases revenues"], correct: 1 },
    { q: "If total assets are $150,000 and total liabilities are $90,000, what is total equity?", a: ["$60,000", "$90,000", "$150,000", "$240,000"], correct: 0 },
    { q: "A company writes off an uncollectible account receivable. Which account is debited?", a: ["Accounts Receivable", "Allowance for Doubtful Accounts", "Bad Debt Expense", "Cash"], correct: 2 },
    { q: "What does the allowance method do?", a: ["Records the actual loss when a customer defaults", "Estimates uncollectible accounts before they occur", "Only records bad debts when cash is received", "Reduces retained earnings permanently"], correct: 1 },
    { q: "Which is the correct formula for current ratio?", a: ["Current Assets / Current Liabilities", "Net Income / Sales", "Assets / Equity", "Cash + Receivables / Liabilities"], correct: 0 },
    { q: "A company purchases inventory on credit. Which journal entry is correct?", a: ["Debit Inventory; Credit Accounts Payable", "Credit Inventory; Debit Accounts Payable", "Debit Accounts Payable; Credit Inventory", "Debit Cash; Credit Inventory"], correct: 0 },
    { q: "Which item is reported on the balance sheet as a current liability?", a: ["Building", "Mortgage Payable", "Accounts Payable", "Equipment"], correct: 2 },
    { q: "If an adjusting entry records prepaid insurance consumed during the period, which account is debited?", a: ["Prepaid Insurance", "Insurance Expense", "Cash", "Accounts Payable"], correct: 1 },
    { q: "A company pays $1,800 for a 12-month insurance policy. What is the insurance expense after 4 months?", a: ["$600", "$1,200", "$1,800", "$4,800"], correct: 0 },
    { q: "Which of the following increases stockholders' equity?", a: ["Paying dividends", "Recording a loss", "Issuing common stock", "Buying equipment"], correct: 2 },
    { q: "When a company sells goods on credit, which account is credited?", a: ["Sales Revenue", "Accounts Receivable", "Inventory", "Cost of Goods Sold"], correct: 0 },
    { q: "What is the effect of paying rent in advance?", a: ["Prepaid Rent increases and Cash decreases", "Rent Expense increases and Cash decreases", "Cash increases and Liabilities increase", "Rent Revenue increases and Cash increases"], correct: 0 },
    { q: "Which is the primary purpose of the statement of cash flows?", a: ["To show only past profits", "To show where cash came from and how it was used", "To list all unpaid supplier invoices", "To calculate taxes due"], correct: 1 },
    { q: "If an owner invests cash in the business, which account is credited?", a: ["Cash", "Owner's Capital", "Expense", "Accounts Receivable"], correct: 1 },
    { q: "Which financial ratio measures liquidity?", a: ["Gross Profit Margin", "Current Ratio", "Debt Ratio", "Return on Assets"], correct: 1 },
    { q: "A company has net sales of $250,000, cost of goods sold of $160,000, and operating expenses of $45,000. What is gross profit?", a: ["$90,000", "$45,000", "$205,000", "$160,000"], correct: 0 },
    { q: "If a company has a 2:1 current ratio, what does this imply?", a: ["Current liabilities exceed current assets", "Current assets are twice current liabilities", "Net income is twice expenses", "Inventory is twice sales"], correct: 1 },
    { q: "What is the journal entry to record depreciation expense?", a: ["Debit Accumulated Depreciation; Credit Depreciation Expense", "Debit Depreciation Expense; Credit Accumulated Depreciation", "Debit Equipment; Credit Depreciation Expense", "Debit Accumulated Depreciation; Credit Equipment"], correct: 1 },
    { q: "Which of the following is a temporary account?", a: ["Cash", "Accounts Payable", "Service Revenue", "Land"], correct: 2 },
    { q: "A company pays $2,400 for a 24-month policy. What is the monthly insurance expense?", a: ["$100", "$200", "$240", "$1,200"], correct: 0 },
    { q: "A note payable due in 18 months is classified as a:", a: ["Current asset", "Current liability", "Long-term liability", "Expense"], correct: 2 },
    { q: "Which method estimates bad debts based on a percentage of accounts receivable?", a: ["Direct write-off method", "Allowance method", "Cash basis method", "FIFO method"], correct: 1 },
    { q: "If total liabilities are $80,000 and stockholders' equity is $120,000, what are total assets?", a: ["$40,000", "$80,000", "$120,000", "$200,000"], correct: 3 },
    { q: "What is the effect of an owner withdrawal on equity?", a: ["Increases equity", "Decreases equity", "No effect", "Increases liabilities"], correct: 1 }
];

const bossQuestionBank = [
    { q: "A company has beginning retained earnings of $50,000, net income of $18,000, and dividends of $7,000. What is ending retained earnings?", a: ["$61,000", "$68,000", "$57,000", "$75,000"], correct: 1 },
    { q: "A company records depreciation using the straight-line method. Which account is credited?", a: ["Accumulated Depreciation", "Depreciation Expense", "Cash", "Equipment"], correct: 0 },
    { q: "A company estimates bad debts at 2% of credit sales of $500,000. What is the adjusting entry for bad debt expense?", a: ["Debit Bad Debt Expense $10,000; Credit Allowance for Doubtful Accounts $10,000", "Debit Allowance $10,000; Credit Bad Debt Expense $10,000", "Debit Accounts Receivable $10,000; Credit Bad Debt Expense $10,000", "Debit Cash $10,000; Credit Sales $10,000"], correct: 0 },
    { q: "Under the perpetual inventory system, when inventory is sold, which two accounts are involved?", a: ["Inventory and Cost of Goods Sold", "Cash and Inventory", "Accounts Payable and Revenue", "Sales Revenue and Retained Earnings"], correct: 0 },
    { q: "A company issues bonds at a discount. What happens to the carrying value over time?", a: ["It remains the same", "It decreases toward face value", "It increases toward face value", "It becomes zero"], correct: 2 },
    { q: "What is the effect of a stock dividend on total stockholders' equity?", a: ["Increases total equity", "Decreases total equity", "No change in total equity", "Doubles total equity"], correct: 2 },
    { q: "If a company has net sales of $400,000 and gross profit of $130,000, what is cost of goods sold?", a: ["$270,000", "$530,000", "$130,000", "$400,000"], correct: 0 },
    { q: "Which statement best describes the matching principle?", a: ["Expenses are matched with debt repayment", "Expenses are recognized in the same period as related revenues", "Revenues are recognized only when cash is collected", "Assets are recorded at current value"], correct: 1 },
    { q: "A company issues common stock for cash. What is the effect on assets and equity?", a: ["Assets increase; equity decreases", "Assets decrease; equity increases", "Assets increase; equity increases", "Assets decrease; equity decreases"], correct: 2 },
    { q: "Which account would be closed at the end of the accounting period?", a: ["Cash", "Accounts Payable", "Service Revenue", "Land"], correct: 2 },
    { q: "What is the book value of equipment originally costing $40,000 with accumulated depreciation of $16,000?", a: ["$16,000", "$24,000", "$40,000", "$56,000"], correct: 1 },
    { q: "Which financial metric is used to assess profitability relative to sales?", a: ["Debt ratio", "Gross margin", "Current ratio", "Inventory turnover"], correct: 1 },
    { q: "If a company purchases land with a mortgage, what is the journal entry?", a: ["Debit Land; Credit Mortgage Payable", "Credit Land; Debit Mortgage Payable", "Debit Cash; Credit Land", "Debit Mortgage Payable; Credit Land"], correct: 0 },
    { q: "Under the accrual basis of accounting, revenue is recognized when:", a: ["Cash is received", "The service is performed or goods are delivered", "An invoice is paid", "The contract is signed"], correct: 1 },
    { q: "Which of the following is considered a noncurrent asset?", a: ["Inventory", "Accounts Receivable", "Office Furniture", "Prepaid Insurance"], correct: 2 },
    { q: "What is the main goal of bank reconciliation?", a: ["To explain differences between bank and book balances", "To calculate net income", "To record payroll", "To close temporary accounts"], correct: 0 },
    { q: "A company has total assets of $300,000 and total liabilities of $120,000. What is the debt ratio?", a: ["0.40", "0.60", "1.50", "2.50"], correct: 0 },
    { q: "Which statement best describes the cash basis of accounting?", a: ["Revenue is recognized when earned", "Only cash receipts and payments are recorded", "Expenses are matched with revenues", "All transactions are adjusted monthly"], correct: 1 },
    { q: "If a company sells equipment for more than book value, what happens to the gain?", a: ["It decreases retained earnings", "It is reported as income", "It is recorded as a liability", "It is ignored"], correct: 1 },
    { q: "A company purchases $20,000 of merchandise on credit. Which journal entry is correct?", a: ["Debit Merchandise Inventory $20,000; Credit Accounts Payable $20,000", "Debit Accounts Payable $20,000; Credit Merchandise Inventory $20,000", "Debit Cash $20,000; Credit Merchandise Inventory $20,000", "Debit Merchandise Inventory $20,000; Credit Cash $20,000"], correct: 0 },
    { q: "Which ratio is used to evaluate a company's ability to meet short-term obligations?", a: ["Return on equity", "Current ratio", "Gross profit margin", "Debt-to-equity ratio"], correct: 1 },
    { q: "What is the purpose of the statement of retained earnings?", a: ["To show the changes in retained earnings over a period", "To summarize all liabilities", "To determine total equity", "To show cash movements"], correct: 0 },
    { q: "If beginning retained earnings were $40,000, net income was $15,000, and dividends were $5,000, what are ending retained earnings?", a: ["$50,000", "$55,000", "$45,000", "$60,000"], correct: 0 },
    { q: "A company issues bonds at par value. Which statement is true?", a: ["The issue price is above face value", "The issue price equals face value", "The issue price is below face value", "Bonds cannot be issued at par"], correct: 1 },
    { q: "Which account is normally credited when a company records an adjustment for accrued revenue?", a: ["Accounts Receivable", "Revenue", "Cash", "Expense"], correct: 1 },
    { q: "What does FOB destination mean?", a: ["The buyer pays shipping", "The seller pays shipping", "Shipping is not recorded", "The item is delivered before sale"], correct: 1 },
    { q: "Which item is best described as a current asset?", a: ["Building", "Patent", "Cash", "Mortgage Payable"], correct: 2 }
];

function getQuestionDeckForDifficulty(level) {
    const selectedDeck = [];

    if (level >= 7) {
        selectedDeck.push(...bossQuestionBank);
    }
    if (level >= 4) {
        selectedDeck.push(...hardQuestionBank);
    }
    selectedDeck.push(...questionBank);

    for (let i = selectedDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [selectedDeck[i], selectedDeck[j]] = [selectedDeck[j], selectedDeck[i]];
    }

    return selectedDeck;
}

// 2. Game State Variables
let shuffledQuestions = [];
let currentQuestionIndex = 0;

const abmClasses = [
    {
        name: "Accountancy",
        attackBonus: 0,
        hpBonus: 0,
        accent: "#f6c453",
        advantage: "Balanced and reliable",
        disadvantage: "No special edge against any enemy",
        attackMultiplier: 1,
        incomingDamageMultiplier: 1,
        regularEnemyDamageMultiplier: 1,
        bossDamageMultiplier: 1,
        critChanceBonus: 0,
        critMultiplierBonus: 0,
        wrongAnswerPenaltyMultiplier: 1,
        healOnCorrect: 0,
        powerName: "Ledger Shield",
        powerDescription: "Gain 8% reduced damage for the next turn.",
        triggerPower: (target, attacker) => {
            const reducedDamage = Math.round(attacker.attack * 0.08);
            attacker.hp = Math.min(attacker.maxHp, attacker.hp + reducedDamage);
            return `Ledger Shield: ${attacker.className} restores ${reducedDamage} HP and reduces incoming damage.`;
        }
    },
    {
        name: "Business Finance",
        attackBonus: 5,
        hpBonus: 10,
        accent: "#7dd3fc",
        advantage: "Huge bonus vs normal enemies",
        disadvantage: "Weakens badly in boss fights",
        attackMultiplier: 1.18,
        incomingDamageMultiplier: 1.12,
        regularEnemyDamageMultiplier: 1.4,
        bossDamageMultiplier: 0.82,
        critChanceBonus: 0.02,
        critMultiplierBonus: 0.1,
        wrongAnswerPenaltyMultiplier: 1.15,
        healOnCorrect: 0,
        powerName: "Cash Flow Burst",
        powerDescription: "Deal a big bonus strike to normal enemies.",
        triggerPower: (target, attacker) => {
            const bonusDamage = Math.round(attacker.attack * 1.2);
            target.hp -= bonusDamage;
            return `Cash Flow Burst: ${bonusDamage} bonus damage!`;
        }
    },
    {
        name: "Marketing",
        attackBonus: 8,
        hpBonus: 4,
        accent: "#f9a8d4",
        advantage: "Fastest damage and crit pressure",
        disadvantage: "Very fragile against bosses",
        attackMultiplier: 1.26,
        incomingDamageMultiplier: 1.2,
        regularEnemyDamageMultiplier: 1.35,
        bossDamageMultiplier: 0.73,
        critChanceBonus: 0.08,
        critMultiplierBonus: 0.2,
        wrongAnswerPenaltyMultiplier: 1.25,
        healOnCorrect: 0,
        powerName: "Brand Slam",
        powerDescription: "Guaranteed critical hit on the next successful answer.",
        triggerPower: (target, attacker) => {
            target.hp -= Math.round(attacker.attack * 1.5);
            return `Brand Slam: guaranteed heavy burst damage!`;
        }
    },
    {
        name: "Entrepreneurship",
        attackBonus: 10,
        hpBonus: 12,
        accent: "#86efac",
        advantage: "Breaks enemy HP bars fast",
        disadvantage: "Counterattacks hurt more when you miss",
        attackMultiplier: 1.38,
        incomingDamageMultiplier: 1.22,
        regularEnemyDamageMultiplier: 1.18,
        bossDamageMultiplier: 1.08,
        critChanceBonus: 0.02,
        critMultiplierBonus: 0.25,
        wrongAnswerPenaltyMultiplier: 1.3,
        healOnCorrect: 0,
        powerName: "Risky Pivot",
        powerDescription: "Deal massive damage but take a little recoil.",
        triggerPower: (target, attacker) => {
            const burst = Math.round(attacker.attack * 1.75);
            const recoil = Math.round(attacker.maxHp * 0.08);
            target.hp -= burst;
            attacker.hp = Math.max(0, attacker.hp - recoil);
            return `Risky Pivot: ${burst} damage, but you take ${recoil} recoil.`;
        }
    },
    {
        name: "Economics",
        attackBonus: 6,
        hpBonus: 6,
        accent: "#c4b5fd",
        advantage: "Consistent offense and reduced incoming damage",
        disadvantage: "Lower burst than specialist classes",
        attackMultiplier: 1.1,
        incomingDamageMultiplier: 0.82,
        regularEnemyDamageMultiplier: 1.12,
        bossDamageMultiplier: 0.96,
        critChanceBonus: 0.03,
        critMultiplierBonus: 0.1,
        wrongAnswerPenaltyMultiplier: 0.92,
        healOnCorrect: 0,
        powerName: "Market Stabilizer",
        powerDescription: "Reduce incoming damage and slightly heal after a correct answer.",
        triggerPower: (target, attacker) => {
            const heal = Math.round(attacker.maxHp * 0.12);
            attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
            return `Market Stabilizer: ${heal} HP restored and damage reduced.`;
        }
    },
    {
        name: "HR & Management",
        attackBonus: 7,
        hpBonus: 15,
        accent: "#fbbf24",
        advantage: "Best durability and boss survival",
        disadvantage: "Slower damage growth",
        attackMultiplier: 0.96,
        incomingDamageMultiplier: 0.7,
        regularEnemyDamageMultiplier: 0.94,
        bossDamageMultiplier: 1.18,
        critChanceBonus: 0.01,
        critMultiplierBonus: 0.05,
        wrongAnswerPenaltyMultiplier: 0.82,
        healOnCorrect: 0.08,
        powerName: "Team Recovery",
        powerDescription: "Heal a chunk of HP every successful answer.",
        triggerPower: (target, attacker) => {
            const heal = Math.round(attacker.maxHp * 0.2);
            attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
            return `Team Recovery: ${heal} HP restored.`;
        }
    },
    {
        name: "Gambler",
        attackBonus: 14,
        hpBonus: 8,
        accent: "#facc15",
        advantage: "Huge burst reward and strong crit spikes",
        disadvantage: "Wild swings: heavy damage on misses and risky power usage",
        attackMultiplier: 1.42,
        incomingDamageMultiplier: 1.18,
        regularEnemyDamageMultiplier: 1.28,
        bossDamageMultiplier: 1.12,
        critChanceBonus: 0.09,
        critMultiplierBonus: 0.35,
        wrongAnswerPenaltyMultiplier: 1.45,
        healOnCorrect: 0.04,
        powerName: "All-In Bet",
        powerDescription: "Risk everything for a massive burst and a possible heal.",
        triggerPower: (target, attacker) => {
            const burst = Math.round(attacker.attack * 2.1);
            const recoil = Math.round(attacker.maxHp * 0.12);
            const chance = Math.random();
            const bonus = chance > 0.55 ? Math.round(attacker.attack * 0.6) : 0;
            target.hp -= burst + bonus;
            attacker.hp = Math.max(0, attacker.hp - recoil);
            return `All-In Bet: ${burst + bonus} damage, but you take ${recoil} recoil.`;
        }
    }
];

const finalBossClass = {
    name: "Final Verdict",
    attackBonus: 18,
    hpBonus: 28,
    accent: "#f97316",
    advantage: "Designed specifically to beat Luca",
    disadvantage: "Very high risk: weakens on early wrong answers and struggles in long fights",
    attackMultiplier: 1.7,
    incomingDamageMultiplier: 0.8,
    regularEnemyDamageMultiplier: 1.25,
    bossDamageMultiplier: 1.5,
    critChanceBonus: 0.06,
    critMultiplierBonus: 0.42,
    wrongAnswerPenaltyMultiplier: 1.25,
    healOnCorrect: 0.12,
    powerName: "Final Audit",
    powerDescription: "A huge finisher that tears through boss HP and restores health.",
    triggerPower: (target, attacker) => {
        const burst = Math.round(attacker.attack * 2.4);
        const heal = Math.round(attacker.maxHp * 0.18);
        target.hp -= burst;
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
        return `Final Audit: ${burst} boss damage and ${heal} HP restored.`;
    }
};

const secretBossClass = {
    name: "Hidden Ledger",
    attackBonus: 20,
    hpBonus: 24,
    accent: "#22d3ee",
    advantage: "Best damage and crit chance after unlocking the secret path",
    disadvantage: "Extreme glass cannon: low survivability if you miss questions or take repeated hits",
    attackMultiplier: 1.85,
    incomingDamageMultiplier: 0.9,
    regularEnemyDamageMultiplier: 1.35,
    bossDamageMultiplier: 1.7,
    critChanceBonus: 0.1,
    critMultiplierBonus: 0.5,
    wrongAnswerPenaltyMultiplier: 1.35,
    healOnCorrect: 0.15,
    powerName: "Konami Break",
    powerDescription: "A hidden-finisher that deals massive burst damage and a strong heal.",
    triggerPower: (target, attacker) => {
        const burst = Math.round(attacker.attack * 2.8);
        const heal = Math.round(attacker.maxHp * 0.22);
        target.hp -= burst;
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
        return `Konami Break: ${burst} damage and ${heal} HP restored.`;
    }
};

const ghostLedgerClass = {
    name: "Ghost Ledger",
    attackBonus: 22,
    hpBonus: 20,
    accent: "#a78bfa",
    advantage: "Excellent burst and hidden-power scaling",
    disadvantage: "Weakens when you rely on normal answers and no secret path is used",
    attackMultiplier: 1.9,
    incomingDamageMultiplier: 0.88,
    regularEnemyDamageMultiplier: 1.38,
    bossDamageMultiplier: 1.82,
    critChanceBonus: 0.12,
    critMultiplierBonus: 0.55,
    wrongAnswerPenaltyMultiplier: 1.4,
    healOnCorrect: 0.18,
    powerName: "Phantom Ledger",
    powerDescription: "A stealthy finisher that rewards secret path mastery.",
    triggerPower: (target, attacker) => {
        const burst = Math.round(attacker.attack * 3.1);
        const heal = Math.round(attacker.maxHp * 0.24);
        target.hp -= burst;
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
        return `Phantom Ledger: ${burst} damage and ${heal} HP restored.`;
    }
};

const midnightAuditorClass = {
    name: "Midnight Auditor",
    attackBonus: 16,
    hpBonus: 26,
    accent: "#38bdf8",
    advantage: "Strong late-game sustain and crit control",
    disadvantage: "Slow start and punishes wasted turns badly",
    attackMultiplier: 1.48,
    incomingDamageMultiplier: 0.78,
    regularEnemyDamageMultiplier: 1.2,
    bossDamageMultiplier: 1.55,
    critChanceBonus: 0.07,
    critMultiplierBonus: 0.45,
    wrongAnswerPenaltyMultiplier: 1.3,
    healOnCorrect: 0.14,
    powerName: "Night Audit",
    powerDescription: "A hidden finishing strike that restores a large chunk of health.",
    triggerPower: (target, attacker) => {
        const burst = Math.round(attacker.attack * 2.6);
        const heal = Math.round(attacker.maxHp * 0.2);
        target.hp -= burst;
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
        return `Night Audit: ${burst} damage and ${heal} HP restored.`;
    }
};

const blackoutReconcilerClass = {
    name: "Blackout Reconciler",
    attackBonus: 19,
    hpBonus: 22,
    accent: "#f472b6",
    advantage: "Huge burst with a risky but rewarding all-in style",
    disadvantage: "Requires careful timing and punishes careless play",
    attackMultiplier: 1.7,
    incomingDamageMultiplier: 0.82,
    regularEnemyDamageMultiplier: 1.3,
    bossDamageMultiplier: 1.62,
    critChanceBonus: 0.08,
    critMultiplierBonus: 0.5,
    wrongAnswerPenaltyMultiplier: 1.28,
    healOnCorrect: 0.1,
    powerName: "Power Cut",
    powerDescription: "A hidden strike that deals stronger damage when the player has mastered the secret path.",
    triggerPower: (target, attacker) => {
        const burst = Math.round(attacker.attack * 2.9);
        const heal = Math.round(attacker.maxHp * 0.16);
        target.hp -= burst;
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
        return `Power Cut: ${burst} damage and ${heal} HP restored.`;
    }
};

const goldenEggClass = {
    name: "Golden Egg",
    attackBonus: 13,
    hpBonus: 18,
    accent: "#facc15",
    advantage: "Richer crit damage when the party celebrates a hidden find",
    disadvantage: "Needs a perfect hidden sequence to trigger its full power",
    attackMultiplier: 1.45,
    incomingDamageMultiplier: 0.9,
    regularEnemyDamageMultiplier: 1.24,
    bossDamageMultiplier: 1.35,
    critChanceBonus: 0.09,
    critMultiplierBonus: 0.35,
    wrongAnswerPenaltyMultiplier: 1.2,
    healOnCorrect: 0.08,
    powerName: "Golden Hatch",
    powerDescription: "A reward for discovering the hidden egg by clicking the whispering clue three times.",
    triggerPower: (target, attacker) => {
        const burst = Math.round(attacker.attack * 2.2);
        const heal = Math.round(attacker.maxHp * 0.12);
        target.hp -= burst;
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
        return `Golden Hatch: ${burst} damage and ${heal} HP restored.`;
    }
};

const bunnyLedgerClass = {
    name: "Bunny Ledger",
    attackBonus: 16,
    hpBonus: 16,
    accent: "#4ade80",
    advantage: "Strong burst when the hidden phrase is spoken",
    disadvantage: "Low damage when the player ignores the Easter clue",
    attackMultiplier: 1.6,
    incomingDamageMultiplier: 0.88,
    regularEnemyDamageMultiplier: 1.32,
    bossDamageMultiplier: 1.48,
    critChanceBonus: 0.06,
    critMultiplierBonus: 0.4,
    wrongAnswerPenaltyMultiplier: 1.22,
    healOnCorrect: 0.12,
    powerName: "Spring Hop",
    powerDescription: "A quick spring-inspired finisher triggered by the hidden rabbit chant.",
    triggerPower: (target, attacker) => {
        const burst = Math.round(attacker.attack * 2.6);
        const heal = Math.round(attacker.maxHp * 0.18);
        target.hp -= burst;
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
        return `Spring Hop: ${burst} damage and ${heal} HP restored.`;
    }
};

const springAuditClass = {
    name: "Spring Auditor",
    attackBonus: 18,
    hpBonus: 24,
    accent: "#38bdf8",
    advantage: "Excellent sustain and clean hidden-sequence bonuses",
    disadvantage: "Needs careful timing and repeated secret inputs",
    attackMultiplier: 1.72,
    incomingDamageMultiplier: 0.8,
    regularEnemyDamageMultiplier: 1.38,
    bossDamageMultiplier: 1.58,
    critChanceBonus: 0.08,
    critMultiplierBonus: 0.45,
    wrongAnswerPenaltyMultiplier: 1.18,
    healOnCorrect: 0.14,
    powerName: "Bloom Audit",
    powerDescription: "A hidden spring finisher that rewards the full Easter egg ritual.",
    triggerPower: (target, attacker) => {
        const burst = Math.round(attacker.attack * 2.9);
        const heal = Math.round(attacker.maxHp * 0.2);
        target.hp -= burst;
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
        return `Bloom Audit: ${burst} damage and ${heal} HP restored.`;
    }
};

const pikachuProjectionClass = {
    name: "Pikachu Projections",
    attackBonus: 15,
    hpBonus: 16,
    accent: "#facc15",
    advantage: "Electric burst damage and fast combo pressure",
    disadvantage: "Needs a specific hidden phrase to maximize its power",
    attackMultiplier: 1.58,
    incomingDamageMultiplier: 0.9,
    regularEnemyDamageMultiplier: 1.28,
    bossDamageMultiplier: 1.4,
    critChanceBonus: 0.09,
    critMultiplierBonus: 0.38,
    wrongAnswerPenaltyMultiplier: 1.18,
    healOnCorrect: 0.1,
    powerName: "Thunder Balance",
    powerDescription: "An electric finisher unlocked by the hidden electric whisper.",
    triggerPower: (target, attacker) => {
        const burst = Math.round(attacker.attack * 2.5);
        const heal = Math.round(attacker.maxHp * 0.14);
        target.hp -= burst;
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
        return `Thunder Balance: ${burst} damage and ${heal} HP restored.`;
    }
};

const onePunchLedgerClass = {
    name: "One Punch Ledger",
    attackBonus: 20,
    hpBonus: 20,
    accent: "#f97316",
    advantage: "Huge damage spike when a boss is almost finished",
    disadvantage: "Very fragile if you enter fights at full strength and miss answers",
    attackMultiplier: 1.75,
    incomingDamageMultiplier: 0.92,
    regularEnemyDamageMultiplier: 1.22,
    bossDamageMultiplier: 1.7,
    critChanceBonus: 0.07,
    critMultiplierBonus: 0.5,
    wrongAnswerPenaltyMultiplier: 1.22,
    healOnCorrect: 0.12,
    powerName: "One Hit Ledger",
    powerDescription: "A pressure class unlocked by winning while barely alive.",
    triggerPower: (target, attacker) => {
        const burst = Math.round(attacker.attack * 3.1);
        const heal = Math.round(attacker.maxHp * 0.18);
        target.hp -= burst;
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
        return `One Hit Ledger: ${burst} damage and ${heal} HP restored.`;
    }
};

const yodaJournalClass = {
    name: "Yoda's Journal",
    attackBonus: 12,
    hpBonus: 24,
    accent: "#4ade80",
    advantage: "Strong defensive control and wise late-game sustain",
    disadvantage: "Slow burst and small combat swing when under pressure",
    attackMultiplier: 1.3,
    incomingDamageMultiplier: 0.75,
    regularEnemyDamageMultiplier: 1.1,
    bossDamageMultiplier: 1.45,
    critChanceBonus: 0.05,
    critMultiplierBonus: 0.3,
    wrongAnswerPenaltyMultiplier: 1.1,
    healOnCorrect: 0.16,
    powerName: "The Force Ledger",
    powerDescription: "A tranquil class unlocked by the hidden wisdom sequence.",
    triggerPower: (target, attacker) => {
        const burst = Math.round(attacker.attack * 2.2);
        const heal = Math.round(attacker.maxHp * 0.22);
        target.hp -= burst;
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
        return `The Force Ledger: ${burst} damage and ${heal} HP restored.`;
    }
};

const wandaBalanceClass = {
    name: "Wanda's Balance",
    attackBonus: 17,
    hpBonus: 18,
    accent: "#c084fc",
    advantage: "Fantastic burst when the hidden pattern is followed precisely",
    disadvantage: "Risky if the sequence is ignored or interrupted",
    attackMultiplier: 1.64,
    incomingDamageMultiplier: 0.84,
    regularEnemyDamageMultiplier: 1.26,
    bossDamageMultiplier: 1.52,
    critChanceBonus: 0.1,
    critMultiplierBonus: 0.45,
    wrongAnswerPenaltyMultiplier: 1.2,
    healOnCorrect: 0.12,
    powerName: "Hex Ledger",
    powerDescription: "A magical finisher unlocked by a repeated hidden action.",
    triggerPower: (target, attacker) => {
        const burst = Math.round(attacker.attack * 2.75);
        const heal = Math.round(attacker.maxHp * 0.16);
        target.hp -= burst;
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
        return `Hex Ledger: ${burst} damage and ${heal} HP restored.`;
    }
};

const spideySpreadsheetClass = {
    name: "Spidey Spreadsheet",
    attackBonus: 14,
    hpBonus: 17,
    accent: "#ef4444",
    advantage: "Fast web-slinging bursts with great mobility",
    disadvantage: "Noisy playstyle that struggles under heavy boss pressure",
    attackMultiplier: 1.5,
    incomingDamageMultiplier: 0.95,
    regularEnemyDamageMultiplier: 1.35,
    bossDamageMultiplier: 1.34,
    critChanceBonus: 0.08,
    critMultiplierBonus: 0.4,
    wrongAnswerPenaltyMultiplier: 1.16,
    healOnCorrect: 0.09,
    powerName: "Web Swing",
    powerDescription: "A kinetic finish unlocked by a hidden swing pattern.",
    triggerPower: (target, attacker) => {
        const burst = Math.round(attacker.attack * 2.4);
        const heal = Math.round(attacker.maxHp * 0.13);
        target.hp -= burst;
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
        return `Web Swing: ${burst} damage and ${heal} HP restored.`;
    }
};

const marioLedgerClass = {
    name: "Mario Ledger",
    attackBonus: 13,
    hpBonus: 22,
    accent: "#f59e0b",
    advantage: "Reliable power-up scaling and strong survival",
    disadvantage: "Less burst than some hidden classes",
    attackMultiplier: 1.42,
    incomingDamageMultiplier: 0.86,
    regularEnemyDamageMultiplier: 1.2,
    bossDamageMultiplier: 1.38,
    critChanceBonus: 0.06,
    critMultiplierBonus: 0.35,
    wrongAnswerPenaltyMultiplier: 1.14,
    healOnCorrect: 0.11,
    powerName: "Power-Up Audit",
    powerDescription: "A classic hero class unlocked by collecting coins in the battle log.",
    triggerPower: (target, attacker) => {
        const burst = Math.round(attacker.attack * 2.2);
        const heal = Math.round(attacker.maxHp * 0.15);
        target.hp -= burst;
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
        return `Power-Up Audit: ${burst} damage and ${heal} HP restored.`;
    }
};

const narutoBalanceClass = {
    name: "Naruto Balance",
    attackBonus: 18,
    hpBonus: 14,
    accent: "#f97316",
    advantage: "Huge burst and chakra-like stamina",
    disadvantage: "Can burn out if you miss too many answers",
    attackMultiplier: 1.7,
    incomingDamageMultiplier: 0.88,
    regularEnemyDamageMultiplier: 1.25,
    bossDamageMultiplier: 1.55,
    critChanceBonus: 0.1,
    critMultiplierBonus: 0.45,
    wrongAnswerPenaltyMultiplier: 1.25,
    healOnCorrect: 0.1,
    powerName: "Shadow Clone Audit",
    powerDescription: "An advanced finisher unlocked after a hidden chakra sequence.",
    triggerPower: (target, attacker) => {
        const burst = Math.round(attacker.attack * 2.8);
        const heal = Math.round(attacker.maxHp * 0.17);
        target.hp -= burst;
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
        return `Shadow Clone Audit: ${burst} damage and ${heal} HP restored.`;
    }
};

const avengersAuditClass = {
    name: "Avengers Audit",
    attackBonus: 19,
    hpBonus: 21,
    accent: "#60a5fa",
    advantage: "Team power and excellent boss shredding",
    disadvantage: "Needs a clean combo chain to stay strong",
    attackMultiplier: 1.8,
    incomingDamageMultiplier: 0.82,
    regularEnemyDamageMultiplier: 1.28,
    bossDamageMultiplier: 1.68,
    critChanceBonus: 0.09,
    critMultiplierBonus: 0.47,
    wrongAnswerPenaltyMultiplier: 1.22,
    healOnCorrect: 0.14,
    powerName: "Assemble Ledger",
    powerDescription: "A team-up finisher unlocked by a special hidden squad phrase.",
    triggerPower: (target, attacker) => {
        const burst = Math.round(attacker.attack * 3.0);
        const heal = Math.round(attacker.maxHp * 0.2);
        target.hp -= burst;
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
        return `Assemble Ledger: ${burst} damage and ${heal} HP restored.`;
    }
};

const sansAuditClass = {
    name: "Sans Audit",
    attackBonus: 21,
    hpBonus: 28,
    accent: "#f8fafc",
    advantage: "Relaxed but devastating late-game pressure",
    disadvantage: "Weakens if the boss room gets too chaotic",
    attackMultiplier: 1.92,
    incomingDamageMultiplier: 0.78,
    regularEnemyDamageMultiplier: 1.3,
    bossDamageMultiplier: 1.75,
    critChanceBonus: 0.12,
    critMultiplierBonus: 0.52,
    wrongAnswerPenaltyMultiplier: 1.15,
    healOnCorrect: 0.12,
    powerName: "Lazy Gaze",
    powerDescription: "A secret finisher earned by defeating the hidden Sans boss.",
    triggerPower: (target, attacker) => {
        const burst = Math.round(attacker.attack * 3.2);
        const heal = Math.round(attacker.maxHp * 0.2);
        target.hp -= burst;
        attacker.hp = Math.min(attacker.maxHp, attacker.hp + heal);
        return `Lazy Gaze: ${burst} damage and ${heal} HP restored.`;
    }
};

const secretBosses = [
    {
        id: 'konami',
        name: 'The Konami Ledger King',
        hp: 420,
        attack: 48,
        classDrop: ghostLedgerClass,
        hint: 'The ledger hums in a nostalgic rhythm...',
        unlockText: 'A hidden pattern appears in the margins...'
    },
    {
        id: 'midnight',
        name: 'Moonlit Auditor',
        hp: 480,
        attack: 52,
        classDrop: midnightAuditorClass,
        hint: 'There is a quiet key waiting in the dark...',
        unlockText: 'The silence shifts as a silver key turns.'
    },
    {
        id: 'blackout',
        name: 'Blackout Reconciler',
        hp: 540,
        attack: 58,
        classDrop: blackoutReconcilerClass,
        hint: 'The room flickers three times before the lights die...',
        unlockText: 'The power cuts out, but the ledger still glows.'
    },
    {
        id: 'sans',
        name: 'Sans the Auditor',
        hp: 600,
        attack: 64,
        classDrop: sansAuditClass,
        hint: 'A crooked grin flickers over a blank sheet...',
        unlockText: 'The room goes quiet... then a joke lands a little too hard.'
    }
];

const rarityStyles = {
    Common: { color: '#94a3b8', label: 'Common' },
    Uncommon: { color: '#22c55e', label: 'Uncommon' },
    Rare: { color: '#3b82f6', label: 'Rare' },
    Epic: { color: '#a855f7', label: 'Epic' },
    Legendary: { color: '#f59e0b', label: 'Legendary' }
};

const equipmentCatalog = [
    {
        id: 'ledger-dagger',
        name: 'Ledger Dagger',
        description: '+8 ATK. Sharp, quick, and meant for clean strikes.',
        slot: 'weapon',
        attackBonus: 8,
        hpBonus: 0,
        rarity: 'Rare',
        dropWeight: 3
    },
    {
        id: 'audit-shield',
        name: 'Audit Shield',
        description: '+12 HP. A solid defense against harsh counterattacks.',
        slot: 'armor',
        attackBonus: 0,
        hpBonus: 12,
        rarity: 'Uncommon',
        dropWeight: 4
    },
    {
        id: 'excel-crown',
        name: 'Excel Crown',
        description: '+6 ATK and +6 HP. Built for consistent growth.',
        slot: 'accessory',
        attackBonus: 6,
        hpBonus: 6,
        rarity: 'Epic',
        dropWeight: 2
    },
    {
        id: 'balance-spear',
        name: 'Balance Spear',
        description: '+12 ATK. Built for aggressive accounting strikes.',
        slot: 'weapon',
        attackBonus: 12,
        hpBonus: 0,
        rarity: 'Rare',
        dropWeight: 2
    },
    {
        id: 'revenue-mail',
        name: 'Revenue Mail',
        description: '+18 HP. Sturdy plating handed out to reliable traders.',
        slot: 'armor',
        attackBonus: 0,
        hpBonus: 18,
        rarity: 'Uncommon',
        dropWeight: 3
    },
    {
        id: 'cash-ring',
        name: 'Cash Ring',
        description: '+4 ATK and +10 HP. A practical emblem of steady growth.',
        slot: 'accessory',
        attackBonus: 4,
        hpBonus: 10,
        rarity: 'Uncommon',
        dropWeight: 4
    },
    {
        id: 'inkblade',
        name: 'Inkblade',
        description: '+18 ATK. Cuts through messy ledgers in one move.',
        slot: 'weapon',
        attackBonus: 18,
        hpBonus: 0,
        rarity: 'Epic',
        dropWeight: 2
    },
    {
        id: 'vault-plate',
        name: 'Vault Plate',
        description: '+24 HP. A stone-solid defense for long fights.',
        slot: 'armor',
        attackBonus: 0,
        hpBonus: 24,
        rarity: 'Rare',
        dropWeight: 2
    },
    {
        id: 'oracle-charm',
        name: 'Oracle Charm',
        description: '+8 ATK and +14 HP. A charm whispered about in hidden corners.',
        slot: 'accessory',
        attackBonus: 8,
        hpBonus: 14,
        rarity: 'Epic',
        dropWeight: 1
    },
    {
        id: 'golden-sigil',
        name: 'Golden Sigil',
        description: '+12 ATK and +18 HP. A bright relic of legendary wealth.',
        slot: 'accessory',
        attackBonus: 12,
        hpBonus: 18,
        rarity: 'Legendary',
        dropWeight: 1
    },
    {
        id: 'ledger-sword',
        name: 'Ledger Sword',
        description: '+10 ATK. A balanced blade for reliable pressure.',
        slot: 'weapon',
        attackBonus: 10,
        hpBonus: 0,
        rarity: 'Rare',
        dropWeight: 3
    },
    {
        id: 'iron-ledger',
        name: 'Iron Ledger',
        description: '+15 HP. Heavy armor for consistent survival.',
        slot: 'armor',
        attackBonus: 0,
        hpBonus: 15,
        rarity: 'Uncommon',
        dropWeight: 4
    },
    {
        id: 'crystal-badge',
        name: 'Crystal Badge',
        description: '+7 ATK and +12 HP. A glowing mark of careful work.',
        slot: 'accessory',
        attackBonus: 7,
        hpBonus: 12,
        rarity: 'Rare',
        dropWeight: 3
    },
    {
        id: 'profit-pike',
        name: 'Profit Pike',
        description: '+15 ATK. Drives momentum through the toughest fights.',
        slot: 'weapon',
        attackBonus: 15,
        hpBonus: 0,
        rarity: 'Rare',
        dropWeight: 3
    },
    {
        id: 'creditor-plate',
        name: 'Creditor Plate',
        description: '+22 HP. A resilient shell built for extended duels.',
        slot: 'armor',
        attackBonus: 0,
        hpBonus: 22,
        rarity: 'Uncommon',
        dropWeight: 3
    },
    {
        id: 'brimstone-lens',
        name: 'Brimstone Lens',
        description: '+9 ATK and +11 HP. Gives you a sharper eye in battle.',
        slot: 'accessory',
        attackBonus: 9,
        hpBonus: 11,
        rarity: 'Rare',
        dropWeight: 2
    },
    {
        id: 'swift-quill',
        name: 'Swift Quill',
        description: '+11 ATK. A quick weapon for precision strikes.',
        slot: 'weapon',
        attackBonus: 11,
        hpBonus: 0,
        rarity: 'Uncommon',
        dropWeight: 4
    },
    {
        id: 'taxguard',
        name: 'Taxguard',
        description: '+20 HP. A battle-ready guard for disciplined fighters.',
        slot: 'armor',
        attackBonus: 0,
        hpBonus: 20,
        rarity: 'Rare',
        dropWeight: 3
    },
    {
        id: 'balance-band',
        name: 'Balance Band',
        description: '+6 ATK and +16 HP. A dependable charm for long fights.',
        slot: 'accessory',
        attackBonus: 6,
        hpBonus: 16,
        rarity: 'Uncommon',
        dropWeight: 4
    },
    {
        id: 'aurum-axe',
        name: 'Aurum Axe',
        description: '+20 ATK. A heavy weapon that punishes weak defenses.',
        slot: 'weapon',
        attackBonus: 20,
        hpBonus: 0,
        rarity: 'Epic',
        dropWeight: 2
    },
    {
        id: 'parry-cape',
        name: 'Parry Cape',
        description: '+28 HP. A resilient cape that absorbs punishment.',
        slot: 'armor',
        attackBonus: 0,
        hpBonus: 28,
        rarity: 'Rare',
        dropWeight: 2
    },
    {
        id: 'moon-sigil',
        name: 'Moon Sigil',
        description: '+10 ATK and +18 HP. A calming relic from deep in the vault.',
        slot: 'accessory',
        attackBonus: 10,
        hpBonus: 18,
        rarity: 'Epic',
        dropWeight: 1
    },
    {
        id: 'treasury-rapier',
        name: 'Treasury Rapier',
        description: '+16 ATK. Clean, precise, and built for endless duels.',
        slot: 'weapon',
        attackBonus: 16,
        hpBonus: 0,
        rarity: 'Rare',
        dropWeight: 2
    },
    {
        id: 'seal-guard',
        name: 'Seal Guard',
        description: '+26 HP. A reinforced armor with a prestige finish.',
        slot: 'armor',
        attackBonus: 0,
        hpBonus: 26,
        rarity: 'Rare',
        dropWeight: 2
    },
    {
        id: 'fortune-orb',
        name: 'Fortune Orb',
        description: '+12 ATK and +12 HP. A lucky charm with surprising value.',
        slot: 'accessory',
        attackBonus: 12,
        hpBonus: 12,
        rarity: 'Epic',
        dropWeight: 2
    },
    {
        id: 'ledger-buckler',
        name: 'Ledger Buckler',
        description: '+18 HP. A compact shield bred for endurance.',
        slot: 'armor',
        attackBonus: 0,
        hpBonus: 18,
        rarity: 'Uncommon',
        dropWeight: 3
    },
    {
        id: 'cash-tome',
        name: 'Cash Tome',
        description: '+9 ATK and +20 HP. A readable relic with hidden strength.',
        slot: 'accessory',
        attackBonus: 9,
        hpBonus: 20,
        rarity: 'Rare',
        dropWeight: 2
    },
    {
        id: 'aureate-crest',
        name: 'Aureate Crest',
        description: '+11 ATK and +16 HP. A polished crest of rising wealth.',
        slot: 'accessory',
        attackBonus: 11,
        hpBonus: 16,
        rarity: 'Epic',
        dropWeight: 1
    },
    {
        id: 'quartz-staff',
        name: 'Quartz Staff',
        description: '+13 ATK. A balanced staff for disciplined attackers.',
        slot: 'weapon',
        attackBonus: 13,
        hpBonus: 0,
        rarity: 'Uncommon',
        dropWeight: 3
    },
    {
        id: 'kiln-ward',
        name: 'Kiln Ward',
        description: '+30 HP. A towering plate that turns incoming blows aside.',
        slot: 'armor',
        attackBonus: 0,
        hpBonus: 30,
        rarity: 'Rare',
        dropWeight: 2
    },
    {
        id: 'loan-visor',
        name: 'Loan Visor',
        description: '+8 ATK and +15 HP. Practical and surprisingly classy.',
        slot: 'accessory',
        attackBonus: 8,
        hpBonus: 15,
        rarity: 'Uncommon',
        dropWeight: 3
    },
    {
        id: 'mint-gauntlet',
        name: 'Mint Gauntlet',
        description: '+17 ATK. A sharp, fresh weapon of surprising reach.',
        slot: 'weapon',
        attackBonus: 17,
        hpBonus: 0,
        rarity: 'Epic',
        dropWeight: 2
    },
    {
        id: 'velvet-veil',
        name: 'Velvet Veil',
        description: '+6 ATK and +24 HP. Elegant defense for patient fighters.',
        slot: 'accessory',
        attackBonus: 6,
        hpBonus: 24,
        rarity: 'Rare',
        dropWeight: 2
    },
    {
        id: 'overdrawn-axe',
        name: 'Overdrawn Axe',
        description: '+22 ATK. A brutal weapon with excellent finishing power.',
        slot: 'weapon',
        attackBonus: 22,
        hpBonus: 0,
        rarity: 'Epic',
        dropWeight: 1
    },
    {
        id: 'ledger-mail',
        name: 'Ledger Mail',
        description: '+32 HP. Premium armor worn by elite auditors.',
        slot: 'armor',
        attackBonus: 0,
        hpBonus: 32,
        rarity: 'Rare',
        dropWeight: 1
    },
    {
        id: 'starwatcher',
        name: 'Starwatcher',
        description: '+15 ATK and +15 HP. A legendary relic for disciplined winners.',
        slot: 'accessory',
        attackBonus: 15,
        hpBonus: 15,
        rarity: 'Legendary',
        dropWeight: 1
    },
    {
        id: 'tax-rune',
        name: 'Tax Rune',
        description: '+14 ATK. An old rune that thrives under pressure.',
        slot: 'weapon',
        attackBonus: 14,
        hpBonus: 0,
        rarity: 'Rare',
        dropWeight: 2
    },
    {
        id: 'capital-plate',
        name: 'Capital Plate',
        description: '+35 HP. The final word in defensive steel.',
        slot: 'armor',
        attackBonus: 0,
        hpBonus: 35,
        rarity: 'Epic',
        dropWeight: 1
    },
    {
        id: 'fortune-crown',
        name: 'Fortune Crown',
        description: '+13 ATK and +18 HP. A crown of great value and great risk.',
        slot: 'accessory',
        attackBonus: 13,
        hpBonus: 18,
        rarity: 'Legendary',
        dropWeight: 1
    },
    {
        id: 'final-journal',
        name: 'Final Journal',
        description: '+25 ATK. A legendary blade born from impossible accountancy.',
        slot: 'weapon',
        attackBonus: 25,
        hpBonus: 0,
        rarity: 'Legendary',
        dropWeight: 1
    }
];

const shopCatalog = [
    {
        id: 'potion',
        name: 'Healing Potion',
        description: 'Restore 35% HP immediately.',
        rarity: 'Common',
        cost: 15,
        action: () => {
            if (player.gold < 15) {
                logEl.innerText = 'Merchant: You need 15 gold for a Healing Potion.';
                return false;
            }
            player.gold -= 15;
            const healAmount = Math.min(player.maxHp - player.hp, Math.round(player.maxHp * 0.35));
            player.hp += healAmount;
            playerInventory.potion += 1;
            logEl.innerText = `Merchant: You bought a Healing Potion and recovered ${healAmount} HP.`;
            updateItemButton();
            updateUi();
            return true;
        }
    },
    {
        id: 'boost',
        name: 'Focus Ink',
        description: '+10 ATK for the next battle.',
        rarity: 'Uncommon',
        cost: 25,
        action: () => {
            if (player.gold < 25) {
                logEl.innerText = 'Merchant: You need 25 gold for Focus Ink.';
                return false;
            }
            player.gold -= 25;
            player.attack += 10;
            logEl.innerText = 'Merchant: Focus Ink purchased. Your next battle starts with +10 ATK.';
            updateUi();
            return true;
        }
    },
    {
        id: 'shield',
        name: 'Ledger Charm',
        description: 'Gain +15 max HP permanently.',
        rarity: 'Rare',
        cost: 35,
        action: () => {
            if (player.gold < 35) {
                logEl.innerText = 'Merchant: You need 35 gold for a Ledger Charm.';
                return false;
            }
            player.gold -= 35;
            player.maxHp += 15;
            player.hp = player.maxHp;
            logEl.innerText = 'Merchant: Ledger Charm purchased. You gain +15 max HP and heal to full.';
            updateUi();
            return true;
        }
    },
    {
        id: 'ledger-dagger',
        name: 'Ledger Dagger',
        description: '+8 ATK. Sharp, quick, and meant for clean strikes.',
        rarity: 'Rare',
        cost: 40,
        action: () => {
            const item = equipmentCatalog.find((entry) => entry.id === 'ledger-dagger');
            if (!item) return false;
            if (player.equipment.includes(item.id)) {
                logEl.innerText = `Merchant: You already own the ${item.name}.`;
                return false;
            }
            if (player.gold < 40) {
                logEl.innerText = 'Merchant: You need 40 gold for the Ledger Dagger.';
                return false;
            }
            player.gold -= 40;
            return applyEquipment(item);
        }
    },
    {
        id: 'audit-shield',
        name: 'Audit Shield',
        description: '+12 HP. A solid defense against harsh counterattacks.',
        rarity: 'Uncommon',
        cost: 45,
        action: () => {
            const item = equipmentCatalog.find((entry) => entry.id === 'audit-shield');
            if (!item) return false;
            if (player.equipment.includes(item.id)) {
                logEl.innerText = `Merchant: You already own the ${item.name}.`;
                return false;
            }
            if (player.gold < 45) {
                logEl.innerText = 'Merchant: You need 45 gold for the Audit Shield.';
                return false;
            }
            player.gold -= 45;
            return applyEquipment(item);
        }
    },
    {
        id: 'excel-crown',
        name: 'Excel Crown',
        description: '+6 ATK and +6 HP. Built for consistent growth.',
        rarity: 'Epic',
        cost: 50,
        action: () => {
            const item = equipmentCatalog.find((entry) => entry.id === 'excel-crown');
            if (!item) return false;
            if (player.equipment.includes(item.id)) {
                logEl.innerText = `Merchant: You already own the ${item.name}.`;
                return false;
            }
            if (player.gold < 50) {
                logEl.innerText = 'Merchant: You need 50 gold for the Excel Crown.';
                return false;
            }
            player.gold -= 50;
            return applyEquipment(item);
        }
    },
    {
        id: 'balance-spear',
        name: 'Balance Spear',
        description: '+12 ATK. Built for aggressive accounting strikes.',
        rarity: 'Rare',
        cost: 60,
        action: () => {
            const item = equipmentCatalog.find((entry) => entry.id === 'balance-spear');
            if (!item) return false;
            if (player.equipment.includes(item.id)) {
                logEl.innerText = `Merchant: You already own the ${item.name}.`;
                return false;
            }
            if (player.gold < 60) {
                logEl.innerText = 'Merchant: You need 60 gold for the Balance Spear.';
                return false;
            }
            player.gold -= 60;
            return applyEquipment(item);
        }
    },
    {
        id: 'revenue-mail',
        name: 'Revenue Mail',
        description: '+18 HP. Sturdy plating handed out to reliable traders.',
        rarity: 'Uncommon',
        cost: 55,
        action: () => {
            const item = equipmentCatalog.find((entry) => entry.id === 'revenue-mail');
            if (!item) return false;
            if (player.equipment.includes(item.id)) {
                logEl.innerText = `Merchant: You already own the ${item.name}.`;
                return false;
            }
            if (player.gold < 55) {
                logEl.innerText = 'Merchant: You need 55 gold for the Revenue Mail.';
                return false;
            }
            player.gold -= 55;
            return applyEquipment(item);
        }
    },
    {
        id: 'cash-ring',
        name: 'Cash Ring',
        description: '+4 ATK and +10 HP. A practical emblem of steady growth.',
        rarity: 'Uncommon',
        cost: 45,
        action: () => {
            const item = equipmentCatalog.find((entry) => entry.id === 'cash-ring');
            if (!item) return false;
            if (player.equipment.includes(item.id)) {
                logEl.innerText = `Merchant: You already own the ${item.name}.`;
                return false;
            }
            if (player.gold < 45) {
                logEl.innerText = 'Merchant: You need 45 gold for the Cash Ring.';
                return false;
            }
            player.gold -= 45;
            return applyEquipment(item);
        }
    },
    {
        id: 'inkblade',
        name: 'Inkblade',
        description: '+18 ATK. Cuts through messy ledgers in one move.',
        rarity: 'Epic',
        cost: 90,
        action: () => {
            const item = equipmentCatalog.find((entry) => entry.id === 'inkblade');
            if (!item) return false;
            if (player.equipment.includes(item.id)) {
                logEl.innerText = `Merchant: You already own the ${item.name}.`;
                return false;
            }
            if (player.gold < 90) {
                logEl.innerText = 'Merchant: You need 90 gold for the Inkblade.';
                return false;
            }
            player.gold -= 90;
            return applyEquipment(item);
        }
    },
    {
        id: 'vault-plate',
        name: 'Vault Plate',
        description: '+24 HP. A stone-solid defense for long fights.',
        rarity: 'Rare',
        cost: 85,
        action: () => {
            const item = equipmentCatalog.find((entry) => entry.id === 'vault-plate');
            if (!item) return false;
            if (player.equipment.includes(item.id)) {
                logEl.innerText = `Merchant: You already own the ${item.name}.`;
                return false;
            }
            if (player.gold < 85) {
                logEl.innerText = 'Merchant: You need 85 gold for the Vault Plate.';
                return false;
            }
            player.gold -= 85;
            return applyEquipment(item);
        }
    },
    {
        id: 'oracle-charm',
        name: 'Oracle Charm',
        description: '+8 ATK and +14 HP. A charm whispered about in hidden corners.',
        rarity: 'Epic',
        cost: 95,
        action: () => {
            const item = equipmentCatalog.find((entry) => entry.id === 'oracle-charm');
            if (!item) return false;
            if (player.equipment.includes(item.id)) {
                logEl.innerText = `Merchant: You already own the ${item.name}.`;
                return false;
            }
            if (player.gold < 95) {
                logEl.innerText = 'Merchant: You need 95 gold for the Oracle Charm.';
                return false;
            }
            player.gold -= 95;
            return applyEquipment(item);
        }
    },
    {
        id: 'golden-sigil',
        name: 'Golden Sigil',
        description: '+12 ATK and +18 HP. A bright relic of legendary wealth.',
        rarity: 'Legendary',
        cost: 140,
        action: () => {
            const item = equipmentCatalog.find((entry) => entry.id === 'golden-sigil');
            if (!item) return false;
            if (player.equipment.includes(item.id)) {
                logEl.innerText = `Merchant: You already own the ${item.name}.`;
                return false;
            }
            if (player.gold < 140) {
                logEl.innerText = 'Merchant: You need 140 gold for the Golden Sigil.';
                return false;
            }
            player.gold -= 140;
            return applyEquipment(item);
        }
    }
];

let player = {
    hp: 100,
    maxHp: 100,
    attack: 25,
    level: 1,
    xp: 0,
    xpToNext: 100,
    className: "Accountancy",
    equipment: [],
    equipped: {
        weapon: null,
        armor: null,
        accessory: null
    },
    gold: 0
};
let difficultyLevel = 1;
let finalBossClassUnlocked = false;
let secretBossClassUnlocked = false;
let ghostLedgerUnlocked = false;
let midnightAuditorUnlocked = false;
let blackoutReconcilerUnlocked = false;
let goldenEggUnlocked = false;
let bunnyLedgerUnlocked = false;
let springAuditUnlocked = false;
let pikachuProjectionUnlocked = false;
let onePunchLedgerUnlocked = false;
let yodaJournalUnlocked = false;
let wandaBalanceUnlocked = false;
let spideySpreadsheetUnlocked = false;
let marioLedgerUnlocked = false;
let narutoBalanceUnlocked = false;
let avengersAuditUnlocked = false;
let sansAuditUnlocked = false;
let miniBossesDefeated = 0;
let bossWins = 0;
let enemy = { name: "Tax Goblin", hp: 60, maxHp: 60, attack: 15, isBoss: false, isMiniBoss: false, isFinalBoss: false, isSecretBoss: false };
const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let konamiProgress = [];
let secretBossUnlocked = false;
let blackoutSecretTapCount = 0;
let eggTapCount = 0;
let bunnySequenceProgress = "";
let wandaTapCount = 0;
let popCulturePhraseProgress = "";
let swingTapCount = 0;
let coinCounter = 0;
let chakraProgress = "";
let assembleProgress = "";
const playerClassBadgeEl = document.getElementById('player-class-badge');
const equippedWeaponEl = document.getElementById('equipped-weapon');
const equippedArmorEl = document.getElementById('equipped-armor');
const equippedAccessoryEl = document.getElementById('equipped-accessory');
const startMenuScreenEl = document.getElementById('start-menu-screen');
const startGameButtonEl = document.getElementById('start-game-button');
const classSelectionScreenEl = document.getElementById('class-selection-screen');
const classSelectionGridEl = document.getElementById('class-selection-grid');
const classStartButtonEl = document.getElementById('class-start-button');
const secretHintsEl = document.getElementById('secret-hints');
const useHealingItemButtonEl = document.getElementById('use-healing-item');
const classPowerButtonEl = document.createElement('button');
let selectedClassIndex = 0;
let classPowerReady = true;
let classPowerCooldown = 0;
let classPowerTimer = null;
let playerInventory = { potion: 0 };
const MAX_POTIONS = 5;

// 3. DOM Elements
const questionEl = document.getElementById('question');
const answerButtonsEl = document.getElementById('answer-buttons');
const logEl = document.getElementById('battle-log');
const playerHpBar = document.getElementById('player-hp');
const enemyHpBar = document.getElementById('enemy-hp');
const playerHpText = document.getElementById('player-hp-text');
const enemyHpText = document.getElementById('enemy-hp-text');
const enemyNameEl = document.getElementById('enemy-name');
const enemyStatusEl = document.getElementById('enemy-status');
const playerLevelEl = document.getElementById('player-level');
const playerExpEl = document.getElementById('player-exp');
const levelUpOverlayEl = document.getElementById('level-up-overlay');
const gameOverScreenEl = document.getElementById('game-over-screen');
const gameOverMessageEl = document.getElementById('game-over-message');
const retryButtonEl = document.getElementById('retry-button');
const vfxLayer = document.getElementById('vfx-layer');
const shopScreenEl = document.getElementById('shop-screen');
const shopItemsEl = document.getElementById('shop-items');
const shopCloseButtonEl = document.getElementById('shop-close-button');

retryButtonEl.addEventListener('click', () => {
    hideGameOverScreen();
    startGame();
});

if (classStartButtonEl) {
    classStartButtonEl.addEventListener('click', () => {
        startGame();
    });
}

if (useHealingItemButtonEl) {
    useHealingItemButtonEl.addEventListener('click', useHealingItem);
}

if (startGameButtonEl) {
    startGameButtonEl.addEventListener('click', () => {
        hideStartMenuScreen();
        showClassSelectionScreen();
        renderClassSelection();
    });
}

if (shopCloseButtonEl) {
    shopCloseButtonEl.addEventListener('click', () => {
        hideShopScreen();
        setTimeout(spawnNewEnemy, 250);
    });
}

document.addEventListener('keydown', (event) => {
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    const expected = konamiCode[konamiProgress.length];

    if (key === expected) {
        konamiProgress.push(key);

        if (konamiProgress.length === konamiCode.length) {
            triggerSecretBoss(secretBosses[0]);
            konamiProgress = [];
        }
    } else {
        konamiProgress = [];
        if (key === konamiCode[0]) {
            konamiProgress = [key];
        }
    }

    if (event.shiftKey && key === 'a') {
        triggerSecretBoss(secretBosses[1]);
    }

    if (event.shiftKey && key === 'v') {
        blackoutSecretTapCount += 1;
        if (blackoutSecretTapCount >= 3) {
            triggerSecretBoss(secretBosses[2]);
            blackoutSecretTapCount = 0;
        }
    }

    if (event.altKey && key === 's') {
        triggerSecretBoss(secretBosses[3]);
    }

    if (event.altKey && event.shiftKey && key === 'e') {
        if (!springAuditUnlocked) {
            springAuditUnlocked = true;
            logEl.innerText = 'Easter egg discovered: Spring Auditor unlocked!';
            renderClassSelection();
        }
    }

    if (event.altKey && event.key.toLowerCase() === 'p') {
        if (!pikachuProjectionUnlocked) {
            pikachuProjectionUnlocked = true;
            logEl.innerText = 'Pop culture hidden class unlocked: Pikachu Projections!';
            renderClassSelection();
        }
    }

    if (event.ctrlKey && event.key.toLowerCase() === 'y') {
        if (!yodaJournalUnlocked) {
            yodaJournalUnlocked = true;
            logEl.innerText = 'Pop culture hidden class unlocked: Yoda\'s Journal!';
            renderClassSelection();
        }
    }

    if (event.shiftKey && event.key.toLowerCase() === 'o') {
        if (!onePunchLedgerUnlocked) {
            onePunchLedgerUnlocked = true;
            logEl.innerText = 'Pop culture hidden class unlocked: One Punch Ledger!';
            renderClassSelection();
        }
    }

    if (event.ctrlKey && event.shiftKey && key === 'w') {
        wandaTapCount += 1;
        if (wandaTapCount >= 3 && !wandaBalanceUnlocked) {
            wandaBalanceUnlocked = true;
            logEl.innerText = 'Pop culture hidden class unlocked: Wanda\'s Balance!';
            renderClassSelection();
        }
    }

    if (event.key.toLowerCase() === 's' && event.shiftKey) {
        swingTapCount += 1;
        if (swingTapCount >= 2 && !spideySpreadsheetUnlocked) {
            spideySpreadsheetUnlocked = true;
            logEl.innerText = 'Pop culture hidden class unlocked: Spidey Spreadsheet!';
            renderClassSelection();
        }
    }

    if (event.key.toLowerCase() === 'm' && event.shiftKey) {
        coinCounter += 1;
        if (coinCounter >= 5 && !marioLedgerUnlocked) {
            marioLedgerUnlocked = true;
            logEl.innerText = 'Pop culture hidden class unlocked: Mario Ledger!';
            renderClassSelection();
        }
    }

    if (!event.altKey && !event.ctrlKey && !event.metaKey && key.length === 1) {
        bunnySequenceProgress += key.toLowerCase();
        if (bunnySequenceProgress.includes('egg')) {
            bunnySequenceProgress = '';
            if (!bunnyLedgerUnlocked) {
                bunnyLedgerUnlocked = true;
                logEl.innerText = 'Easter egg discovered: Bunny Ledger unlocked!';
                renderClassSelection();
            }
        }
        if (bunnySequenceProgress.length > 12) {
            bunnySequenceProgress = bunnySequenceProgress.slice(-12);
        }

        popCulturePhraseProgress += key.toLowerCase();
        if (popCulturePhraseProgress.includes('pikachu')) {
            popCulturePhraseProgress = '';
            if (!pikachuProjectionUnlocked) {
                pikachuProjectionUnlocked = true;
                logEl.innerText = 'Pop culture hidden class unlocked: Pikachu Projections!';
                renderClassSelection();
            }
        }
        if (popCulturePhraseProgress.length > 16) {
            popCulturePhraseProgress = popCulturePhraseProgress.slice(-16);
        }

        chakraProgress += key.toLowerCase();
        if (chakraProgress.includes('naruto')) {
            chakraProgress = '';
            if (!narutoBalanceUnlocked) {
                narutoBalanceUnlocked = true;
                logEl.innerText = 'Pop culture hidden class unlocked: Naruto Balance!';
                renderClassSelection();
            }
        }
        if (chakraProgress.length > 18) {
            chakraProgress = chakraProgress.slice(-18);
        }

        assembleProgress += key.toLowerCase();
        if (assembleProgress.includes('avengers')) {
            assembleProgress = '';
            if (!avengersAuditUnlocked) {
                avengersAuditUnlocked = true;
                logEl.innerText = 'Pop culture hidden class unlocked: Avengers Audit!';
                renderClassSelection();
            }
        }
        if (assembleProgress.length > 20) {
            assembleProgress = assembleProgress.slice(-20);
        }
    }
});

document.addEventListener('click', (event) => {
    if (event.target && event.target.closest('#secret-hints')) {
        eggTapCount += 1;
        if (eggTapCount >= 3 && !goldenEggUnlocked) {
            goldenEggUnlocked = true;
            logEl.innerText = 'Easter egg discovered: Golden Egg unlocked!';
            renderClassSelection();
        }
    }
});

document.addEventListener('dblclick', (event) => {
    if (event.target && event.target.closest('#player-class-badge')) {
        if (!goldenEggUnlocked) {
            goldenEggUnlocked = true;
            logEl.innerText = 'Easter egg discovered: Golden Egg unlocked!';
            renderClassSelection();
        }
    }
});

function updateSecretHint() {
    if (!secretHintsEl) return;

    const availableHints = [
        'The ledger whispers of hidden rhythms...',
        'A familiar pattern glows in the margins...',
        'The room hums softly... something is waiting in the dark.',
        'A forgotten key seems to respond to the silence.'
    ];

    const unlockedHint = [
        ghostLedgerUnlocked && 'The old rhythm was real...',
        midnightAuditorUnlocked && 'The room goes quiet, as if listening...',
        blackoutReconcilerUnlocked && 'The lights flicker and the ledger blinks back.',
        goldenEggUnlocked && 'A hidden egg trembles in the corners of the ledger...',
        bunnyLedgerUnlocked && 'The bunny symbol keeps hopping into view...',
        springAuditUnlocked && 'The spring breeze carries a classic hidden key.',
        pikachuProjectionUnlocked && 'A tiny electric spark dances beneath the balance sheet...',
        onePunchLedgerUnlocked && 'A calm aura settles over the ledger as the room goes still...',
        yodaJournalUnlocked && 'A wise whisper slips through the margins of the journal...',
        wandaBalanceUnlocked && 'The magic in the air bends the numbers just a little.',
        spideySpreadsheetUnlocked && 'A web-like pattern appears between the columns...',
        marioLedgerUnlocked && 'Coins clink like a hidden reward in the ledger...',
        narutoBalanceUnlocked && 'A shadow clone flickers beside the totals...',
        avengersAuditUnlocked && 'The room hums with a team-up signal from a distant universe.',
        sansAuditUnlocked && 'A tiny laugh echoes from the corner of the ledger...'
    ].filter(Boolean);

    secretHintsEl.textContent = unlockedHint.length ? unlockedHint[unlockedHint.length - 1] : availableHints[Math.floor(Math.random() * availableHints.length)];
}

function getAllClasses() {
    return [...abmClasses, finalBossClass, secretBossClass, ghostLedgerClass, midnightAuditorClass, blackoutReconcilerClass, goldenEggClass, bunnyLedgerClass, springAuditClass, pikachuProjectionClass, onePunchLedgerClass, yodaJournalClass, wandaBalanceClass, spideySpreadsheetClass, marioLedgerClass, narutoBalanceClass, avengersAuditClass, sansAuditClass];
}

function isClassUnlocked(classEntry) {
    if (classEntry === finalBossClass) return finalBossClassUnlocked;
    if (classEntry === secretBossClass) return secretBossClassUnlocked;
    if (classEntry === ghostLedgerClass) return ghostLedgerUnlocked;
    if (classEntry === midnightAuditorClass) return midnightAuditorUnlocked;
    if (classEntry === blackoutReconcilerClass) return blackoutReconcilerUnlocked;
    if (classEntry === goldenEggClass) return goldenEggUnlocked;
    if (classEntry === bunnyLedgerClass) return bunnyLedgerUnlocked;
    if (classEntry === springAuditClass) return springAuditUnlocked;
    if (classEntry === pikachuProjectionClass) return pikachuProjectionUnlocked;
    if (classEntry === onePunchLedgerClass) return onePunchLedgerUnlocked;
    if (classEntry === yodaJournalClass) return yodaJournalUnlocked;
    if (classEntry === wandaBalanceClass) return wandaBalanceUnlocked;
    if (classEntry === spideySpreadsheetClass) return spideySpreadsheetUnlocked;
    if (classEntry === marioLedgerClass) return marioLedgerUnlocked;
    if (classEntry === narutoBalanceClass) return narutoBalanceUnlocked;
    if (classEntry === avengersAuditClass) return avengersAuditUnlocked;
    if (classEntry === sansAuditClass) return sansAuditUnlocked;

    const classIndex = abmClasses.indexOf(classEntry);
    if (classIndex === 0) return true;
    if (classIndex === 1) return player.level >= 2 && bossWins >= 1;
    if (classIndex === 2) return player.level >= 4 && miniBossesDefeated >= 1;
    if (classIndex === 3) return miniBossesDefeated >= 2;
    if (classIndex === 4) return player.level >= 6 && bossWins >= 2;
    if (classIndex === 5) return bossWins >= 2 && player.level >= 5;
    if (classIndex === 6) return player.level >= 3 && difficultyLevel >= 4;
    return true;
}

function getAvailableClasses() {
    return getAllClasses().filter(isClassUnlocked);
}

function getSelectedClass() {
    const availableClasses = getAvailableClasses();
    if (!availableClasses.length) return abmClasses[0];
    if (selectedClassIndex < 0 || selectedClassIndex >= availableClasses.length) {
        selectedClassIndex = 0;
    }
    return availableClasses[selectedClassIndex % availableClasses.length];
}

function getClassUnlockText(classEntry) {
    if (classEntry === finalBossClass) return 'Locked • A final reckoning waits';
    if (classEntry === secretBossClass) return 'Locked • The ledger hides an old path';
    if (classEntry === ghostLedgerClass) return 'Locked • A rhythm from the past remains';
    if (classEntry === midnightAuditorClass) return 'Locked • Silence has a key';
    if (classEntry === blackoutReconcilerClass) return 'Locked • Three flickers before the dark';
    if (classEntry === goldenEggClass) return 'Locked • A whisper keeps returning';
    if (classEntry === bunnyLedgerClass) return 'Locked • A springy little word is hiding';
    if (classEntry === springAuditClass) return 'Locked • The breeze carries a secret';
    if (classEntry === pikachuProjectionClass) return 'Locked • A crackle lingers in the air';
    if (classEntry === onePunchLedgerClass) return 'Locked • A calm finish is worth more than noise';
    if (classEntry === yodaJournalClass) return 'Locked • Wise words are heard in the margins';
    if (classEntry === wandaBalanceClass) return 'Locked • The pattern repeats itself thrice';
    if (classEntry === spideySpreadsheetClass) return 'Locked • A web of motion swings twice';
    if (classEntry === marioLedgerClass) return 'Locked • The coin chorus grows louder';
    if (classEntry === narutoBalanceClass) return 'Locked • Shadow copies are forming';
    if (classEntry === avengersAuditClass) return 'Locked • The team gathers when a name is spoken';
    if (classEntry === sansAuditClass) return 'Locked • A grin appears when the room goes quiet';

    const classIndex = abmClasses.indexOf(classEntry);
    if (classIndex === 1) return 'Locked • The next step needs a boss win';
    if (classIndex === 2) return 'Locked • A stronger wave reveals it';
    if (classIndex === 3) return 'Locked • Two mini-bosses leave a clue';
    if (classIndex === 4) return 'Locked • The bigger fights change the flow';
    if (classIndex === 5) return 'Locked • More bosses, more whispers';
    if (classIndex === 6) return 'Locked • The arena gets louder as you rise';
    return 'Locked';
}

function renderClassSelection() {
    if (!classSelectionGridEl) return;

    updateSecretHint();

    const allClasses = getAllClasses();
    const availableClasses = getAvailableClasses();

    if (!availableClasses.length) {
        selectedClassIndex = 0;
    } else if (selectedClassIndex < 0 || selectedClassIndex >= availableClasses.length) {
        selectedClassIndex = 0;
    }

    classSelectionGridEl.innerHTML = allClasses.map((entry) => {
        const isUnlocked = isClassUnlocked(entry);
        const unlockedIndex = isUnlocked ? availableClasses.indexOf(entry) : -1;
        const isSelected = isUnlocked && selectedClassIndex === unlockedIndex;
        const hintText = isUnlocked ? 'Unlocked' : getClassUnlockText(entry);

        return `
            <button class="class-option ${isSelected ? 'selected' : ''} ${isUnlocked ? '' : 'locked'}" data-class-index="${unlockedIndex}" type="button" ${isUnlocked ? '' : 'disabled'}>
                <small>${hintText}</small>
                <h3>${entry.name}</h3>
                <div class="class-stats">
                    <div>ATK +${entry.attackBonus} &nbsp; HP +${entry.hpBonus}</div>
                    <div><strong>Power:</strong> ${entry.powerName}</div>
                    <div><strong>Adv:</strong> ${entry.advantage}</div>
                    <div><strong>Disadv:</strong> ${entry.disadvantage}</div>
                </div>
            </button>
        `;
    }).join('');

    document.querySelectorAll('.class-option').forEach((button) => {
        if (button.disabled) return;

        button.addEventListener('click', () => {
            selectedClassIndex = Number(button.dataset.classIndex);
            renderClassSelection();
            selectPlayerClass(selectedClassIndex);
        });
    });
}

function hideStartMenuScreen() {
    if (startMenuScreenEl) {
        startMenuScreenEl.classList.add('hidden');
    }
}

function showStartMenuScreen() {
    if (startMenuScreenEl) {
        startMenuScreenEl.classList.remove('hidden');
    }
}

function hideClassSelectionScreen() {
    if (classSelectionScreenEl) {
        classSelectionScreenEl.classList.add('hidden');
    }
}

function showClassSelectionScreen() {
    if (classSelectionScreenEl) {
        classSelectionScreenEl.classList.remove('hidden');
    }
}

function selectPlayerClass(index = 0) {
    const availableClasses = getAvailableClasses();
    if (!availableClasses.length) return;
    if (index < 0 || index >= availableClasses.length) {
        index = 0;
    }
    const chosen = availableClasses[index % availableClasses.length];
    player.className = chosen.name;
    player.attack = 25 + chosen.attackBonus;
    player.maxHp = 100 + chosen.hpBonus;
    player.hp = player.maxHp;
    player.equipment = [];
    player.equipped = {
        weapon: null,
        armor: null,
        accessory: null
    };

    if (playerClassBadgeEl) {
        playerClassBadgeEl.textContent = `Class: ${chosen.name}`;
        playerClassBadgeEl.style.boxShadow = `0 0 15px ${chosen.accent}55`;
        playerClassBadgeEl.style.borderColor = `${chosen.accent}aa`;
    }

    updateClassPowerButton();
}

function updateClassPowerButton() {
    const chosen = getSelectedClass();
    const ready = classPowerCooldown <= 0;
    classPowerReady = ready;

    if (!classPowerButtonEl) return;

    classPowerButtonEl.title = chosen.powerDescription;
    classPowerButtonEl.dataset.cooldown = ready ? 'ready' : String(classPowerCooldown);
    classPowerButtonEl.disabled = !ready;
    classPowerButtonEl.style.opacity = ready ? '1' : '0.6';
    classPowerButtonEl.textContent = ready ? chosen.powerName : `${chosen.powerName} (${classPowerCooldown}T)`;
}

function advancePowerCooldown() {
    if (classPowerCooldown > 0) {
        classPowerCooldown -= 1;
    }
    updateClassPowerButton();
}

// 4. Initialize Game
function triggerClassPower() {
    if (classPowerCooldown > 0) {
        logEl.innerText = "Class power is recharging...";
        return;
    }

    const chosen = getSelectedClass();
    const powerText = chosen.triggerPower(enemy, player);
    classPowerCooldown = 3;
    classPowerReady = false;
    logEl.innerText = powerText;
    updateClassPowerButton();
    updateUi();
}

function startGame() {
    difficultyLevel = 1;
    player.level = 1;
    player.xp = 0;
    player.xpToNext = 100;
    miniBossesDefeated = 0;
    bossWins = 0;
    secretBossUnlocked = false;
    konamiProgress = [];
    classPowerCooldown = 0;
    classPowerReady = true;
    playerInventory.potion = 0;
    player.gold = 0;
    player.equipment = [];
    player.equipped = {
        weapon: null,
        armor: null,
        accessory: null
    };
    clearInterval(classPowerTimer);
    hideGameOverScreen();
    hideClassSelectionScreen();
    selectedClassIndex = Math.min(selectedClassIndex, getAvailableClasses().length - 1);
    selectPlayerClass(selectedClassIndex);

    // Use a difficulty-based question pool so harder enemies use harder accounting questions.
    shuffledQuestions = getQuestionDeckForDifficulty(difficultyLevel);
    currentQuestionIndex = 0;
    resetEnemyForLevel(difficultyLevel);
    updateUi();
    showQuestion();
}

function resetEnemyForLevel(level) {
    const isFinalBoss = level % 10 === 0;
    const isMiniBoss = !isFinalBoss && level % 3 === 0;
    const baseHp = 60 + (level - 1) * 22 + Math.floor(Math.random() * 18);
    const baseAttack = 15 + (level - 1) * 7 + Math.floor(Math.random() * 5);

    enemy.hp = isFinalBoss ? Math.floor(baseHp * 2.5) : isMiniBoss ? Math.floor(baseHp * 1.6) : baseHp;
    enemy.maxHp = enemy.hp;
    enemy.attack = isFinalBoss ? Math.floor(baseAttack * 2.2) : isMiniBoss ? Math.floor(baseAttack * 1.7) : baseAttack;
    enemy.isBoss = isFinalBoss || isMiniBoss;
    enemy.isMiniBoss = isMiniBoss;
    enemy.isFinalBoss = isFinalBoss;
    enemy.isSecretBoss = false;
    enemy.classDrop = null;
    enemy.name = isFinalBoss ? "Luca" : isMiniBoss ? "Mini-Boss: Audit Tyrant" : "Tax Goblin";
}

function initClassPowerButton() {
    classPowerButtonEl.id = 'class-power-button';
    classPowerButtonEl.type = 'button';
    classPowerButtonEl.className = 'class-power-button';
    classPowerButtonEl.textContent = 'Class Power';
    classPowerButtonEl.style.display = 'inline-block';
    classPowerButtonEl.style.marginTop = '12px';
    classPowerButtonEl.addEventListener('click', triggerClassPower);

    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        quizContainer.appendChild(classPowerButtonEl);
    }
}

function onStartup() {
    initClassPowerButton();
    renderClassSelection();
    selectPlayerClass(selectedClassIndex);
    showStartMenuScreen();
    hideClassSelectionScreen();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onStartup);
} else {
    onStartup();
}
// 5. Display a Question
function showQuestion() {
    resetQuestionState();

    // Check if we ran out of questions
    if (currentQuestionIndex >= shuffledQuestions.length) {
        logEl.innerText = "You survived the dungeon! Victory!";
        return;
    }

    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionEl.innerText = currentQuestion.q;

    // Generate answer buttons
    currentQuestion.a.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => handleAnswer(index));
        answerButtonsEl.appendChild(button);
    });
}
function resetQuestionState() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
}

// 6. Process Answer & Run RPG Turn Logic
function rollCriticalStrike(baseDamage, chance = 0.18, multiplier = 2.3) {
    const isCritical = Math.random() < chance;
    const finalDamage = isCritical ? Math.round(baseDamage * multiplier) : baseDamage;
    return { isCritical, damage: finalDamage };
}

function getClassCombatModifiers() {
    const chosenClass = getSelectedClass();
    const isBossFight = enemy.isBoss || enemy.isFinalBoss || enemy.isMiniBoss || enemy.isSecretBoss;

    let attackMultiplier = chosenClass.attackMultiplier;
    let incomingDamageMultiplier = chosenClass.incomingDamageMultiplier;
    let critChance = 0.18 + chosenClass.critChanceBonus;
    let critMultiplier = 2.3 + chosenClass.critMultiplierBonus;

    if (isBossFight) {
        attackMultiplier *= chosenClass.bossDamageMultiplier;
    } else {
        attackMultiplier *= chosenClass.regularEnemyDamageMultiplier;
    }

    return {
        attackMultiplier,
        incomingDamageMultiplier,
        critChance,
        critMultiplier,
        wrongAnswerPenaltyMultiplier: chosenClass.wrongAnswerPenaltyMultiplier,
        healOnCorrect: chosenClass.healOnCorrect
    };
}

function spawnVfx(type, x, y) {
    const vfx = document.createElement('div');
    vfx.className = `vfx-burst vfx-${type}`;
    vfx.style.left = `${x}px`;
    vfx.style.top = `${y}px`;

    if (type === 'level') {
        vfx.className = 'vfx-level';
        vfx.textContent = 'LEVEL UP!';
        vfx.style.left = '50%';
        vfx.style.top = '50%';
    }

    vfxLayer.appendChild(vfx);
    setTimeout(() => vfx.remove(), 900);
}

function handleAnswer(selectedIndex) {
    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    let playerAttackLog = "";
    let enemyCounterattackLog = "";

    if (selectedIndex === currentQuestion.correct) {
        const classModifiers = getClassCombatModifiers();
        const playerStrike = rollCriticalStrike(Math.round(player.attack * classModifiers.attackMultiplier), classModifiers.critChance, classModifiers.critMultiplier);
        enemy.hp -= playerStrike.damage;
        if (enemy.hp < 0) enemy.hp = 0;

        if (classModifiers.healOnCorrect > 0) {
            const healAmount = Math.round(player.maxHp * classModifiers.healOnCorrect);
            player.hp = Math.min(player.maxHp, player.hp + healAmount);
        }

        if (playerStrike.isCritical) {
            playerAttackLog = `CRITICAL HIT! You dealt ${playerStrike.damage} damage to ${enemy.name}!`;
            spawnVfx('crit', 75, 58);
        } else {
            playerAttackLog = `Correct! You dealt ${playerStrike.damage} damage to ${enemy.name}!`;
            spawnVfx('hit', 72, 60);
        }
    } else {
        playerAttackLog = `Wrong! You missed your attack. The answer was "${currentQuestion.a[currentQuestion.correct]}".`;
    }

    updateUi();

    if (enemy.hp > 0 && player.hp > 0) {
        const classModifiers = getClassCombatModifiers();
        const enemyBaseDamage = Math.round(enemy.attack * classModifiers.incomingDamageMultiplier);
        let enemyDamage = enemyBaseDamage;

        if (selectedIndex !== currentQuestion.correct) {
            enemyDamage = Math.round(enemyDamage * classModifiers.wrongAnswerPenaltyMultiplier);
        }

        const enemyMissChance = enemy.isBoss || enemy.isFinalBoss || enemy.isMiniBoss || enemy.isSecretBoss ? 0.14 : 0.2;
        const enemyMissed = Math.random() < enemyMissChance;

        if (enemyMissed) {
            enemyCounterattackLog = ` ${enemy.name} misses the counterattack!`;
        } else {
            const enemyStrike = rollCriticalStrike(enemyDamage, 0.12, 2.5);
            player.hp -= enemyStrike.damage;
            if (player.hp < 0) player.hp = 0;

            if (enemyStrike.isCritical) {
                enemyCounterattackLog = ` ${enemy.name} counterattacks for a CRITICAL ${enemyStrike.damage} damage!`;
                spawnVfx('crit', 30, 62);
            } else {
                enemyCounterattackLog = ` ${enemy.name} counterattacks for ${enemyStrike.damage} damage!`;
                spawnVfx('hit', 28, 62);
            }
        }
    }

    logEl.innerText = `${playerAttackLog}${enemyCounterattackLog}`;

    // Check Win/Loss conditions
    if (enemy.hp <= 0) {
        const xpReward = enemy.isSecretBoss
            ? 300 + (difficultyLevel * 40)
            : enemy.isFinalBoss
                ? 150 + (difficultyLevel * 25)
                : enemy.isMiniBoss
                    ? 60 + (difficultyLevel * 10)
                    : 30 + (difficultyLevel * 6);
        gainExperience(xpReward);
        logEl.innerText += ` You defeated the ${enemy.name}!`;

        if (enemy.isMiniBoss) {
            miniBossesDefeated += 1;
        }

        const goldDropped = dropGoldForEnemy(enemy);
        const potionDropText = tryDropHealingItem(enemy);
        const equipmentDropText = tryDropEquipment(enemy);
        logEl.innerText += ` You collected ${goldDropped} gold.`;
        if (potionDropText) {
            logEl.innerText += potionDropText;
        }
        if (equipmentDropText) {
            logEl.innerText += equipmentDropText;
        }

        if (Math.random() < 0.28) {
            setTimeout(triggerTreasureEvent, 450);
        }

        if (Math.random() < 0.35) {
            setTimeout(showShopScreen, 500);
        } else {
            setTimeout(spawnNewEnemy, 2000);
        }

        if (enemy.isBoss && !enemy.isMiniBoss && !enemy.isFinalBoss && !enemy.isSecretBoss) {
            bossWins += 1;
        }

        if (enemy.isFinalBoss) {
            finalBossClassUnlocked = true;
            bossWins += 1;
            selectedClassIndex = getAvailableClasses().length - 1;
            logEl.innerText += " Luca is defeated. The Final Verdict class is unlocked!";
            selectPlayerClass(selectedClassIndex);
            renderClassSelection();
        }

        if (player.hp <= player.maxHp * 0.25 && bossWins >= 1 && !onePunchLedgerUnlocked) {
            onePunchLedgerUnlocked = true;
            logEl.innerText += " A legendary pop-culture finish! One Punch Ledger unlocked!";
            renderClassSelection();
        }

        if (enemy.isSecretBoss) {
            const classDrop = enemy.classDrop || secretBossClass;
            if (classDrop === ghostLedgerClass) ghostLedgerUnlocked = true;
            if (classDrop === midnightAuditorClass) midnightAuditorUnlocked = true;
            if (classDrop === blackoutReconcilerClass) blackoutReconcilerUnlocked = true;
            if (classDrop === secretBossClass) secretBossClassUnlocked = true;

            selectedClassIndex = getAvailableClasses().lastIndexOf(classDrop);
            if (selectedClassIndex < 0) {
                selectedClassIndex = 0;
            }
            logEl.innerText += ` ${enemy.name} dropped ${classDrop.name}!`;
            if (classDrop !== secretBossClass) {
                logEl.innerText += ` The ${classDrop.name} class is unlocked!`;
            }
            selectPlayerClass(selectedClassIndex);
            renderClassSelection();
        }

        disableInputs();
        if (enemy.isSecretBoss) {
            secretBossUnlocked = false;
            setTimeout(() => {
                logEl.innerText = "The hidden boss has fallen. The ledger is yours.";
            }, 800);
            setTimeout(() => {
                if (Math.random() < 0.35) {
                    showShopScreen();
                } else {
                    spawnNewEnemy();
                }
            }, 2200);
        } else {
            // shop trigger handled above
        }
    } else if (player.hp <= 0) {
        logEl.innerText = "Game Over! The monsters defeated you.";
        showGameOverScreen("The monsters defeated you. Try again!");
        disableInputs();
    } else {
        // Move to the next random question
        currentQuestionIndex++;
        setTimeout(showQuestion, 1500);
    }

    advancePowerCooldown();
    updateUi();
}
// 7. Progression Mechanics
function triggerLevelUpAnimation() {
    levelUpOverlayEl.classList.remove('show');
    void levelUpOverlayEl.offsetWidth;
    levelUpOverlayEl.classList.add('show');
    spawnVfx('level', 50, 50);
    setTimeout(() => {
        levelUpOverlayEl.classList.remove('show');
    }, 1200);
}

function gainExperience(amount) {
    player.xp += amount;
    let leveledUp = false;

    while (player.xp >= player.xpToNext) {
        player.xp -= player.xpToNext;
        player.level += 1;
        leveledUp = true;
        player.xpToNext = Math.floor(player.xpToNext * 1.35 + player.level * 12);
        player.attack += 12;
        player.maxHp += 22;
        player.hp = player.maxHp;
        logEl.innerText += ` Level Up! You reached level ${player.level}! Stats increased and you fully heal!`;
        spawnVfx('heal', 50, 50);
    }

    if (leveledUp) {
        triggerLevelUpAnimation();
    }
}

function spawnNewEnemy() {
    difficultyLevel += 1;
    const isFinalBoss = difficultyLevel % 10 === 0;
    const isMiniBoss = !isFinalBoss && difficultyLevel % 3 === 0;
    const levelBonusHp = 18 + (difficultyLevel - 1) * 12;
    const levelBonusAttack = 4 + (difficultyLevel - 1) * 5;

    const monsters = [
        "Tax Goblin",
        "Invoice Imp",
        "Audit Witch",
        "Balance Sheet Beast",
        "Ledger Lich",
        "Payroll Ogre",
        "Cash Flow Kraken",
        "Depreciation Dragon",
        "Profit Phantom",
        "Reconciliation Raven",
        "Accounts Payable Ape",
        "Capitalist Vampire",
        "IRS Wraith",
        "Overdraft Ogre",
        "Bookkeeper Banshee",
        "Expense Eel"
    ];

    const miniBossNames = [
        "Mini-Boss: Audit Tyrant",
        "Mini-Boss: Chief Tax Reaper",
        "Mini-Boss: Ledger Titan",
        "Mini-Boss: Overdraft Emperor",
        "Mini-Boss: Balance Warden"
    ];

    const baseHp = 60 + levelBonusHp + Math.floor(Math.random() * 20);
    const baseAttack = 15 + levelBonusAttack + Math.floor(Math.random() * 6);

    enemy.hp = isFinalBoss ? Math.floor(baseHp * 2.5) : isMiniBoss ? Math.floor(baseHp * 1.6) : baseHp;
    enemy.maxHp = enemy.hp;
    enemy.attack = isFinalBoss ? Math.floor(baseAttack * 2.2) : isMiniBoss ? Math.floor(baseAttack * 1.7) : baseAttack;
    enemy.isBoss = isMiniBoss || isFinalBoss;
    enemy.isMiniBoss = isMiniBoss;
    enemy.isFinalBoss = isFinalBoss;
    enemy.isSecretBoss = false;
    enemy.name = isFinalBoss ? "Luca" : isMiniBoss ? miniBossNames[Math.floor(Math.random() * miniBossNames.length)] : monsters[Math.floor(Math.random() * monsters.length)];

    logEl.innerText = isFinalBoss
        ? `FINAL BOSS: Luca enters the arena!`
        : isMiniBoss
            ? `Mini Boss Wave! ${enemy.name} enters the arena!`
            : `Difficulty Level ${difficultyLevel}: A wild ${enemy.name} steps forward!`;
    currentQuestionIndex++;
    updateUi();
    showQuestion();
}
function triggerSecretBoss(secretBoss = secretBosses[0]) {
    if (!secretBoss || secretBossUnlocked) return;

    secretBossUnlocked = true;
    enemy.name = secretBoss.name;
    enemy.hp = secretBoss.hp;
    enemy.maxHp = secretBoss.hp;
    enemy.attack = secretBoss.attack;
    enemy.isBoss = true;
    enemy.isMiniBoss = false;
    enemy.isFinalBoss = false;
    enemy.isSecretBoss = true;
    enemy.classDrop = secretBoss.classDrop || secretBossClass;

    logEl.innerText = `Secret boss discovered! ${secretBoss.name} appears! ${secretBoss.hint}`;
    currentQuestionIndex = 0;
    updateUi();
    showQuestion();
}

function applyEquipment(item) {
    if (!item) return false;

    const slot = item.slot || 'weapon';
    const owned = player.equipment.includes(item.id);
    if (!owned) {
        player.equipment.push(item.id);
    }

    const currentItemId = player.equipped[slot];
    if (currentItemId && currentItemId !== item.id) {
        const currentItem = equipmentCatalog.find((entry) => entry.id === currentItemId);
        if (currentItem) {
            player.attack -= currentItem.attackBonus;
            player.maxHp -= currentItem.hpBonus;
            if (player.hp > player.maxHp) {
                player.hp = player.maxHp;
            }
        }
    }

    player.equipped[slot] = item.id;
    player.attack += item.attackBonus;
    player.maxHp += item.hpBonus;
    player.hp = Math.min(player.maxHp, player.hp + item.hpBonus);

    const rarityText = item.rarity || 'Common';
    logEl.innerText = `Merchant: ${item.name} equipped to ${slot} (${rarityText}). +${item.attackBonus} ATK and +${item.hpBonus} HP.`;
    updateUi();
    return true;
}

function getWeightedEquipmentDrop() {
    const weightTotal = equipmentCatalog.reduce((sum, item) => sum + (item.dropWeight || 1), 0);
    let roll = Math.random() * weightTotal;

    for (const item of equipmentCatalog) {
        roll -= item.dropWeight || 1;
        if (roll <= 0) return item;
    }

    return equipmentCatalog[equipmentCatalog.length - 1];
}

function tryDropEquipment(enemyDefeated) {
    if (!enemyDefeated) return '';

    const dropChance = enemyDefeated.isFinalBoss ? 0.22 : enemyDefeated.isMiniBoss ? 0.18 : enemyDefeated.isSecretBoss ? 0.3 : 0.1;
    if (Math.random() > dropChance) return '';

    const item = getWeightedEquipmentDrop();
    if (!item) return '';

    if (player.equipment.includes(item.id)) {
        const itemSlot = item.slot || 'weapon';
        if (!player.equipped[itemSlot] || player.equipped[itemSlot] !== item.id) {
            applyEquipment(item);
            return ` The ${enemyDefeated.name} dropped ${item.name} (${item.rarity || 'Common'}), and you equipped it to your ${itemSlot}.`;
        }
        return ` The ${enemyDefeated.name} dropped ${item.name}, but you already have it.`;
    }

    applyEquipment(item);
    updateUi();
    return ` The ${enemyDefeated.name} dropped ${item.name} (${item.rarity || 'Common'})! You equipped it.`;
}

function triggerTreasureEvent() {
    const roll = Math.random();
    let treasureText = 'Treasure found!';

    if (roll < 0.45) {
        const potionGain = Math.min(2, MAX_POTIONS - playerInventory.potion);
        if (potionGain > 0) {
            playerInventory.potion += potionGain;
            treasureText = `Treasure found! You scavenged ${potionGain} Healing Potion${potionGain > 1 ? 's' : ''}.`;
        } else {
            const bonusGold = 20 + Math.floor(Math.random() * 25);
            player.gold += bonusGold;
            treasureText = `Treasure found! The chest contains ${bonusGold} gold.`;
        }
    } else if (roll < 0.8) {
        const bonusGold = 25 + Math.floor(Math.random() * 60);
        player.gold += bonusGold;
        treasureText = `Treasure found! You found ${bonusGold} gold in a hidden cache.`;
    } else {
        const item = getWeightedEquipmentDrop();
        if (!item) {
            const bonusGold = 15 + Math.floor(Math.random() * 30);
            player.gold += bonusGold;
            treasureText = `Treasure found! The box is empty but still worth ${bonusGold} gold.`;
        } else if (player.equipment.includes(item.id)) {
            const itemSlot = item.slot || 'weapon';
            if (!player.equipped[itemSlot] || player.equipped[itemSlot] !== item.id) {
                applyEquipment(item);
                treasureText = `Treasure found! You found ${item.name} (${item.rarity || 'Common'}) and equipped it to your ${itemSlot}.`;
            } else {
                const bonusGold = 30 + Math.floor(Math.random() * 35);
                player.gold += bonusGold;
                treasureText = `Treasure found! The chest repeats a familiar item, so you settle for ${bonusGold} gold instead.`;
            }
        } else {
            applyEquipment(item);
            treasureText = `Treasure found! You found ${item.name} (${item.rarity || 'Common'}) and equipped it.`;
        }
    }

    logEl.innerText += ` ${treasureText}`;
    updateItemButton();
    updateUi();
}

function renderShopItems() {
    if (!shopItemsEl) return;

    shopItemsEl.innerHTML = shopCatalog.map((item) => {
        const owned = player.equipment.includes(item.id) || false;
        const rarityInfo = rarityStyles[item.rarity] || rarityStyles.Common;
        return `
            <div class="shop-item rarity-${(item.rarity || 'Common').toLowerCase()}">
                <h3>${item.name}</h3>
                <span class="rarity-badge" style="background:${rarityInfo.color};">${rarityInfo.label}</span>
                <p>${item.description}</p>
                <p><strong>Cost: ${item.cost} gold</strong></p>
                <button type="button" data-item-id="${item.id}" ${owned ? 'disabled' : ''}>${owned ? 'Owned' : 'Buy'}</button>
            </div>
        `;
    }).join('');

    shopItemsEl.querySelectorAll('button[data-item-id]').forEach((button) => {
        if (button.disabled) return;
        button.addEventListener('click', () => {
            const selected = shopCatalog.find((item) => item.id === button.dataset.itemId);
            if (selected) {
                const succeeded = selected.action();
                if (succeeded !== false) {
                    hideShopScreen();
                    setTimeout(spawnNewEnemy, 300);
                }
            }
        });
    });
}

function showShopScreen() {
    if (!shopScreenEl) return;
    shopScreenEl.classList.remove('hidden');
    renderShopItems();
}

function hideShopScreen() {
    if (!shopScreenEl) return;
    shopScreenEl.classList.add('hidden');
}

function updateItemButton() {
    if (!useHealingItemButtonEl) return;
    const count = playerInventory.potion || 0;
    useHealingItemButtonEl.textContent = `Use Potion (${count}/${MAX_POTIONS})`;
    useHealingItemButtonEl.disabled = count <= 0 || player.hp >= player.maxHp;
}

function useHealingItem() {
    if (!playerInventory.potion) {
        logEl.innerText = 'No healing potions left.';
        updateItemButton();
        return;
    }

    if (player.hp >= player.maxHp) {
        logEl.innerText = 'You are already at full health.';
        updateItemButton();
        return;
    }

    const healAmount = Math.min(player.maxHp - player.hp, Math.round(player.maxHp * 0.35));
    player.hp += healAmount;
    playerInventory.potion -= 1;
    logEl.innerText = `You used a Healing Potion and recovered ${healAmount} HP.`;
    updateItemButton();
    updateUi();
}

function tryDropHealingItem(enemyDefeated) {
    if (!enemyDefeated) return '';

    const dropChance = enemyDefeated.isFinalBoss ? 0.8 : enemyDefeated.isMiniBoss ? 0.5 : enemyDefeated.isSecretBoss ? 0.9 : 0.28;
    if (Math.random() > dropChance) return '';

    if (playerInventory.potion >= MAX_POTIONS) {
        updateItemButton();
        return ` The ${enemyDefeated.name} dropped a Healing Potion, but your bag is full.`;
    }

    playerInventory.potion += 1;
    updateItemButton();
    return ` The ${enemyDefeated.name} dropped a Healing Potion!`;
}

function dropGoldForEnemy(enemyDefeated) {
    if (!enemyDefeated) return 0;

    const baseGold = enemyDefeated.isFinalBoss ? 60 : enemyDefeated.isSecretBoss ? 55 : enemyDefeated.isMiniBoss ? 28 : 12;
    const levelBonus = difficultyLevel * (enemyDefeated.isBoss ? 4 : 2);
    const goldGained = baseGold + levelBonus;
    player.gold += goldGained;
    return goldGained;
}

function updateEquippedHud() {
    const slots = [
        { key: 'weapon', el: equippedWeaponEl },
        { key: 'armor', el: equippedArmorEl },
        { key: 'accessory', el: equippedAccessoryEl }
    ];

    slots.forEach(({ key, el }) => {
        if (!el) return;
        const itemId = player.equipped[key];
        const item = equipmentCatalog.find((entry) => entry.id === itemId);
        el.textContent = item ? item.name : 'None';
    });
}

function updateUi() {
    // Update numerical readouts
    playerHpText.innerText = `HP: ${player.hp}/${player.maxHp}`;
    enemyHpText.innerText = `HP: ${enemy.hp}/${enemy.maxHp}`;
    enemyNameEl.innerText = `${enemy.name}`;
    enemyStatusEl.innerText = enemy.isSecretBoss ? 'SECRET BOSS' : enemy.isFinalBoss ? 'FINAL BOSS' : enemy.isMiniBoss ? 'MINI BOSS' : 'ENEMY';
    playerLevelEl.innerText = `Lv. ${player.level}`;
    playerExpEl.innerText = `XP: ${player.xp}/${player.xpToNext} | Gold: ${player.gold}`;
    updateEquippedHud();
    updateItemButton();

    // Update graphical health bars
    playerHpBar.style.width = `${(player.hp / player.maxHp) * 100}%`;
    enemyHpBar.style.width = `${(enemy.hp / enemy.maxHp) * 100}%`;
    enemyHpBar.classList.toggle('boss-bar', Boolean(enemy.isBoss || enemy.isSecretBoss));
}

function showGameOverScreen(message) {
    gameOverMessageEl.innerText = message;
    gameOverScreenEl.classList.remove('hidden');
}

function hideGameOverScreen() {
    gameOverScreenEl.classList.add('hidden');
}

function disableInputs() {
    resetQuestionState();
    questionEl.innerText = "Battle Finished";
}
