"use client";

import ServiceAccordion from "./ServiceAccordion";

export default function Services() {
  return (
    <section className="bg-[#24262d] py-16">
  <div className="max-w-5xl mx-auto px-6 space-y-4">

  <ServiceAccordion title="Audit & Assurance">
    <p className="mb-6 text-gray-600">
      We deliver reliable audit and assurance services to ensure financial transparency,
      compliance, and credibility.
    </p>

     <div className="space-y-5">
    <div>
      <h4 className="font-semibold text-lg mb-2">Financial Statement Audits</h4>
      <p className="list-disc space-y-2 text-gray-600">
        Independent audits of financial statements to ensure they are fairly presented
        and compliant with applicable accounting standards.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-2">Internal Audit Services</h3>
      <p className="list-disc space-y-2 text-gray-600">
        Evaluation and improvement of internal controls, risk management,
        and governance processes.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg mb-2">Compliance Audits</h4>
      <p className="list-disc space-y-2 text-gray-600">
        Assessment of adherence to laws, regulations, and contractual obligations.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg mb-2">Review & Compilation Engagements</h4>
      <p className="list-disc space-y-2 text-gray-600">
        Assistance in presenting financial information or providing limited assurance
        without full audit procedures.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg mb-2">Agreed-Upon Procedures (AUP)</h4>
      <p className="list-disc space-y-2 text-gray-600">
        Performance of specific procedures agreed with the client, with factual findings reported.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg mb-2">Specialized Assurance Services</h4>
      <p className="list-disc space-y-2 text-gray-600">
        Tailored assurance services designed for specific industries or unique business needs.
      </p>
    </div>
  </div>
</ServiceAccordion>

  <ServiceAccordion title="Accounting & Financial Reporting">
    <p className="mb-6 text-gray-600">
      We provide comprehensive accounting solutions that enable businesses to maintain accurate financial records and make data-driven decisions.
    </p>
   
    <div className="space-y-6">

  {/* SUB CATEGORY 1 */}
  <div>
    <h4 className="font-semibold text-lg mb-2">Core Accounting</h4>
    <p className="text-gray-600 mb-3"> 
      These services form the foundation of financial record-keeping, ensuring accuracy and organization.
    </p>

    <ul className="list-disc pl-5 space-y-2 text-gray-600">
      <li><span className="font-medium">General Ledger Maintenance:</span> Maintaining the master financial record.</li>
      <li><span className="font-medium">Bank Reconciliations:</span> Ensuring bank and book balances match.</li>
      <li><span className="font-medium">Accounts Payable & Receivable:</span> Managing outgoing and incoming payments.</li>
    </ul>
  </div>

  {/* SUB CATEGORY 2 */}
  <div>
    <h4 className="font-semibold text-lg mb-2">Financial Reporting</h4>
    <p className="text-gray-600 mb-3">
      Providing clear financial insights to support better business decisions.
    </p>

    <ul className="list-disc pl-5 space-y-2 text-gray-600">
      <li><span className="font-medium">Financial Statement Preparation:</span> Preparing accurate income statements and balance sheets.</li>
      <li><span className="font-medium">Management Reports:</span> Generating periodic financial summaries for decision-making.</li>
      <li><span className="font-medium">Budget Preparation:</span> Planning financial resources and expenditures.</li>
      <li><span className="font-medium">Cash Flow Analysis:</span> Monitoring inflow and outflow to maintain liquidity.</li>
    </ul>
  </div>

</div>
  </ServiceAccordion>

  <ServiceAccordion title="Taxation & Compliance">
    <p className="mb-6 text-gray-600">
      Navigating the complexities of taxation is crucial for financial health. We provide expert guidance to help businesses manage tax obligations efficiently while maximizing savings.
      </p>
    
     <div className="space-y-6">

     {/* SUB CATEGORY 1 */}
  <div>
    <h4 className="font-semibold text-lg mb-2">Tax Compliance Services</h4>
    <p className="text-gray-600 mb-3">
      These services ensure businesses meet their tax obligations under the law.
      </p>

    <ul className="list-disc pl-5 space-y-2 text-gray-600">
      <li><span className="font-medium">Tax Return Preparation and Filing: </span> This includes preparing and filing annual income tax returns, quarterly business tax returns, and other tax forms on time to avoid penalties.</li>
      <li><span className="font-medium">Tax Planning and Advisory: </span> Providing strategies to minimize tax liabilities, improve tax efficiency, and ensure compliance, such as identifying deductions and incentives.</li>
      <li><span className="font-medium">Tax Compliance Reviews: </span> Reviewing tax records and processes to find potential compliance issues and recommend fixes.</li>
      <li><span className="font-medium">Assistance with Tax Audits: </span> Representing clients during tax audits, providing documentation, and answering questions to ensure a smooth process.</li>
    </ul>
  </div>

  {/* SUB CATEGORY 2 */}
  <div>
    <h4 className="font-semibold text-lg mb-2">Regulatory Compliance Services</h4>
    <p className="text-gray-600 mb-3">
      These services help businesses meet legal and regulatory requirements beyond taxes.
    </p>

    <ul className="list-disc pl-5 space-y-2 text-gray-600">
      <li><span className="font-medium">Compliance Program Development: </span> Helping companies create compliance programs tailored to their industry and regulatory environment.</li>
      <li><span className="font-medium">Compliance Audits and Reviews: </span> Assessing a company's compliance with laws, regulations, and internal policies.</li>
      <li><span className="font-medium">Corporate Governance: </span> Advising on corporate governance to ensure transparency, accountability, and ethical behavior.</li>
      <li><span className="font-medium">Training and Education: </span> Providing employee training on tax and compliance matters to promote a culture of compliance.</li>
      <li><span className="font-medium">Risk Management: </span> Identifying and assessing tax and compliance risks and developing strategies to reduce them.</li>
      <li><span className="font-medium">Assistance with Government Incentives: </span> Helping businesses apply for government incentives and grants to lower their tax burden.</li>
      <li><span className="font-medium">Due Diligence Reviews: </span>Conducting tax and compliance due diligence for business transactions to identify potential risks.</li>
      <li><span className="font-medium">Estate and Trust Tax Services:</span> Providing tax preparation and planning for estates and trusts, helping clients manage complex tax rules.</li>
      <li><span className="font-medium">Non-Filed Tax Returns:</span> Helping clients file overdue tax returns to regain compliance.</li>
    </ul>
  </div>
</div>
  </ServiceAccordion>

  <ServiceAccordion title="Bookkeeping & Payroll Services">
    <p className="mb-6 text-gray-600">
      We offer reliable bookkeeping and payroll solutions to ensure seamless financial management and employee satisfaction. 
    </p>

     <div className="space-y-6">

  {/* SUB CATEGORY 1 */}
  <div>
    <h4 className="font-semibold text-lg mb-2 text-lg mb-2">Bookkeeping Services</h4>
    <p className="text-gray-600 mb-3">
      These services involve maintaining accurate and up-to-date financial records for businesses.
      </p>

    <ul className="list-disc pl-5 space-y-2 text-gray-600">
      <li><span className="font-medium">Transaction Recording:  </span> Recording all financial transactions, such as sales, purchases, and payments, in the appropriate accounts.</li>
      <li><span className="font-medium">Cloud Accounting Solutions: </span> Using cloud-based accounting systems to improve efficiency and accessibility.</li>
      <li><span className="font-medium">Creating and Adjusting Journal Entries: </span> Ensuring that all financial transactions are correctly recorded in the books by creating and adjusting journal entries.</li>
      <li><span className="font-medium">Monthly Closing of Books: </span> Performing the necessary procedures to close the books at the end of each month, ensuring that all transactions are accounted for and financial records are accurate.</li>
    </ul>
  </div>
     
    {/* SUB CATEGORY 2 */}
  <div>
    <h4 className="font-semibold text-lg mb-2">Payroll Services</h4>
    <p className="text-gray-600 mb-3">
      Payroll services focus on managing employee compensation and ensuring compliance with labor laws and tax regulations.
      </p>

    <ul className="list-disc pl-5 space-y-2 text-gray-600">
      <li><span className="font-medium">Payroll Processing: </span> Calculating employee wages, deductions, and net pay accurately and on time.</li>
      <li><span className="font-medium">Tax Withholding and Remittance:  </span> Withholding the correct amount of taxes from employee wages and remitting them to the appropriate government agencies.</li>
      <li><span className="font-medium">Payroll Tax Compliance: </span> Ensuring compliance with payroll tax laws and regulations, including accurate calculation and timely filing of tax returns.</li>
      <li><span className="font-medium">13th Month Pay Computation: </span> Computing and processing the mandatory 13th-month pay for employees, in compliance with Philippine labor laws.</li>
      <li><span className="font-medium">Final Pay Computation: </span> Computing and processing the final pay for employees who are leaving the company, including all wages, benefits, and deductions.</li>
      <li><span className="font-medium">Statutory Benefits Administration: </span> Managing statutory benefits such as SSS, PhilHealth, and Pag-IBIG contributions, ensuring accurate and timely remittance.</li>      
    </ul>
  </div>
</div>
  </ServiceAccordion>

<ServiceAccordion title="Business & Financial Consultancy">
  {/* INTRO */}
  <p className="mb-6 text-gray-600">
    We provide expert consultancy services to help businesses navigate financial
    challenges and drive sustainable growth.
  </p>

  <p className="mb-8 text-gray-600">
    Business and financial consultancy services are designed to help organizations
    improve their performance, efficiency, and overall financial health. These
    services cover a broad range of areas, from strategic planning to financial
    management and operational improvements.
  </p>

  {/* SUB CATEGORY */}
  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg mb-2 text-lg mb-2">
        1. Strategic Planning
      </h4>
      <p className="text-gray-600 mb-3">
        Strategic planning services help organizations define their long-term
        goals and develop strategies to achieve them.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li><strong>Market Analysis:</strong> Conduct market research to identify opportunities, threats, and customer needs.</li>
        <li><strong>SWOT Analysis:</strong> Evaluate strengths, weaknesses, opportunities, and threats.</li>
        <li><strong>Goal Setting:</strong> Set realistic and measurable goals aligned with mission and vision.</li>
        <li><strong>Strategy Development:</strong> Develop strategies for growth, expansion, and product development.</li>
        <li><strong>Implementation Planning:</strong> Create action plans with timelines, responsibilities, and resources.</li>
      </ul>
    </div>
  </div>

   {/* SUB CATEGORY 2 */}
  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg mb-2 text-lg mt-4 mb-2">
        2. Financial Management
      </h4>
      <p className="text-gray-600 mb-3">
        Financial management services focus on improving an organization's financial performance and stability.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li><strong>Financial Analysis: </strong> Analyzing financial statements, key performance indicators (KPIs), and financial ratios to assess financial health and identify areas for improvement.</li>
        <li><strong>Budgeting and Forecasting: </strong> Developing budgets and financial forecasts to help organizations plan for the future and manage their resources effectively.</li>
        <li><strong>Cost Management:</strong> Identifying and implementing cost-saving measures to improve profitability and efficiency.</li>
        <li><strong>Financial Restructuring: </strong> Providing advice on debt restructuring, equity financing, and other financial strategies to improve financial stability.</li>
        <li><strong>Investment Management: </strong> Offering guidance on investment decisions, asset allocation, and portfolio management to maximize returns and minimize risk.</li>
      </ul>
    </div>
  </div>

 {/* SUB CATEGORY 3 */}
  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg mb-2 text-lg mt-4 mb-2">
        3. Operational Improvement
      </h4>
      <p className="text-gray-600 mb-3">
        Operational improvement services aim to enhance an organization's efficiency, productivity, and overall performance.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li><strong>Process Optimization:  </strong> Analyzing and streamlining business processes to eliminate bottlenecks, reduce waste, and improve efficiency.</li>
        <li><strong>Supply Chain Management: </strong> Optimizing supply chain operations to reduce costs, improve delivery times, and enhance customer satisfaction.</li>
        <li><strong>Technology Implementation:</strong> Assisting with the selection, implementation, and integration of technology solutions to improve operational efficiency.</li>
        <li><strong>Change Management: </strong> Helping organizations manage change effectively, including communication, training, and stakeholder engagement.</li>
        <li><strong>Performance Measurement: </strong> Developing and implementing performance measurement systems to track progress, identify areas for improvement, and drive accountability.</li>
      </ul>
    </div>
  </div>

{/* SUB CATEGORY 4 */}
  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg mb-2 text-lg mt-4 mb-2">
        4. Risk Management
      </h4>
      <p className="text-gray-600 mb-3">
        Risk management services help organizations identify, assess, and mitigate risks that could impact their business.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li><strong>Risk Assessment: </strong> Conducting thorough risk assessments to identify potential risks, including financial, operational, and compliance risks.</li>
        <li><strong>Risk Mitigation Strategies: </strong>  Developing and implementing strategies to mitigate identified risks, such as insurance, hedging, and internal controls.</li>
        <li><strong>Compliance Management: </strong> Ensuring compliance with relevant laws, regulations, and industry standards to minimize legal and regulatory risks.</li>
        <li><strong>Crisis Management: </strong> Developing crisis management plans to prepare for and respond to unexpected events, such as natural disasters, cyberattacks, and product recalls.</li>
        <li><strong>Internal Controls: </strong> Evaluating and improving internal controls to safeguard assets, prevent fraud, and ensure the accuracy of financial information.</li>
      </ul>
    </div>
  </div>

{/* SUB CATEGORY 5 */}
  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg mb-2 text-lg mt-4 mb-2">
        5. Mergers and Acquisitions (M&A)
      </h4>
      <p className="text-gray-600 mb-3">
        M&A advisory services assist organizations in buying, selling, or merging with other businesses.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li><strong>Due Diligence: </strong> Conducting financial, operational, and legal due diligence to assess the value and risks associated with a potential transaction.</li>
        <li><strong>Valuation: </strong> Providing valuation services to determine the fair market value of a business or asset.</li>
        <li><strong>Negotiation: </strong> Assisting with negotiations to reach a mutually beneficial agreement between buyers and sellers.</li>
        <li><strong>Transaction Structuring: </strong> Structuring transactions to minimize taxes, maximize value, and achieve strategic objectives.</li>
        <li><strong>Integration Planning: </strong> Developing integration plans to ensure a smooth transition and realize synergies following a merger or acquisition.</li>
      </ul>
    </div>
  </div>

{/* SUB CATEGORY 6 */}
  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg mb-2 text-lg mt-4 mb-2">
        6. Restructuring and Turnaround
      </h4>
      <p className="text-gray-600 mb-3">
        Restructuring and turnaround services help organizations facing financial distress or operational challenges to stabilize their business and return to profitability.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li><strong>Financial Assessment: </strong> Conducting a thorough assessment of the organization's financial situation to identify the root causes of its problems.</li>
        <li><strong>Restructuring Plan Development: </strong> Developing a restructuring plan to address financial challenges, reduce costs, and improve profitability.</li>
        <li><strong>Operational Improvements: </strong> Implementing operational improvements to streamline processes, reduce waste, and improve efficiency.</li>
        <li><strong>Debt Negotiation: </strong> Negotiating with creditors to restructure debt obligations and improve cash flow.</li>
        <li><strong>Crisis Management: </strong> Providing crisis management support to stabilize the business and restore confidence among stakeholders.</li>
      </ul>
    </div>
  </div>

</ServiceAccordion>

<ServiceAccordion title="Regulatory Compliance & Corporate Services">
  {/* INTRO */}
  <p className="mb-6 text-gray-600">
    We assist businesses in meeting legal and regulatory requirements, ensuring smooth operations and risk mitigation.
  </p>

  <p className="mb-8 text-gray-600">
    These services are designed to help businesses in the Philippines navigate the complex landscape of regulatory requirements and corporate governance, ensuring compliance with local laws and regulations, particularly those mandated by the Securities and Exchange Commission (SEC).
  </p>

{/* SUB CATEGORY 1 */}
  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg mb-2 text-lg mt-4 mb-2">
        1. Business Registration and Licensing
      </h4>
      <p className="text-gray-600 mb-3">
        Assisting new businesses with the registration process and obtaining the necessary licenses and permits to operate legally in the Philippines.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li><strong>SEC Registration: </strong> Facilitating the registration of corporations, partnerships, and other entities with the SEC, including preparing and filing all required documents.</li>
        <li><strong>Local Government Permits: </strong> Assisting with obtaining business permits and licenses from local government units (LGUs), such as mayor's permits and barangay clearances.</li>
        <li><strong>BIR Registration: </strong> Facilitating the registration of businesses with the Bureau of Internal Revenue (BIR) to obtain a Tax Identification Number (TIN) and comply with tax regulations.</li>
        <li><strong>Other Regulatory Permits: </strong> Assisting with obtaining other regulatory permits and licenses required for specific industries, such as those from the Department of Trade and Industry (DTI), the Food and Drug Administration (FDA), and other government agencies.</li>
       </ul>
    </div>
  </div>

  {/* SUB CATEGORY 2 */}
  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg mb-2 text-lg mt-4 mb-2">
        2. Corporate Secretarial Services
      </h4>
      <p className="text-gray-600 mb-3">
        Providing ongoing corporate secretarial services to ensure compliance with corporate governance requirements and maintain accurate corporate records.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li><strong>Preparation of Corporate Documents: </strong> Preparing and maintaining corporate documents, such as articles of incorporation, by-laws, minutes of meetings, and stock certificates.</li>
        <li><strong>Filing of Annual Reports: </strong> Preparing and filing annual reports with the SEC and other regulatory agencies, ensuring timely submission and compliance with reporting requirements.</li>
        <li><strong>Board and Shareholder Meetings: </strong> Organizing and facilitating board and shareholder meetings, including preparing notices, agendas, and minutes of meetings.</li>
        <li><strong>Corporate Governance Compliance: </strong> Advising on corporate governance best practices and ensuring compliance with relevant laws and regulations, such as the Revised Corporation Code of the Philippines.</li>
        <li><strong>Monitoring and Tracking of Deadlines: </strong> Ensuring that all regulatory deadlines are met to avoid penalties and maintain good standing with regulatory agencies.</li>
       </ul>
    </div>
  </div>

 {/* SUB CATEGORY 3 */}
  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg mb-2 text-lg mt-4 mb-2">
        3. SEC Compliance Services
      </h4>
      <p className="text-gray-600 mb-3">
        Providing specialized services to ensure compliance with SEC regulations and requirements.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li><strong>Annual Report Filing: </strong> Preparing and filing annual reports with the SEC, including audited financial statements and other required information.</li>
        <li><strong>Quarterly Report Filing: </strong> Preparing and filing quarterly reports with the SEC, providing updates on the company's financial performance and operations.</li>
        <li><strong>Current Report Filing: </strong> Preparing and filing current reports (with the SEC to disclose material events or changes that could affect the company's financial condition or operations.</li>
        <li><strong>Compliance with Disclosure Requirements: </strong> Ensuring compliance with SEC disclosure requirements, including disclosing material information to investors and the public in a timely and accurate manner.</li>
        <li><strong>SEC Audit Assistance: </strong> Assisting companies with SEC audits and investigations, providing necessary documentation and responding to inquiries to ensure a smooth audit process.</li>
        </ul>
    </div>
  </div>

 {/* SUB CATEGORY 4 */}
  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg mb-2 text-lg mt-4 mb-2">
        4. Risk Management and Internal Controls
      </h4>
      <p className="text-gray-600 mb-3">
        Assisting companies in developing and implementing risk management and internal control systems to safeguard assets and ensure compliance.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li><strong>Risk Assessment: </strong> Conducting risk assessments to identify potential risks and vulnerabilities.</li>
        <li><strong>Internal Control Design: </strong> Designing and implementing internal control systems to mitigate identified risks and ensure the accuracy and reliability of financial information.</li>
        <li><strong>Compliance Monitoring: </strong> Monitoring compliance with internal controls and regulatory requirements, and providing recommendations for improvement.</li>
        <li><strong>Fraud Prevention: </strong> Implementing fraud prevention measures to detect and prevent fraudulent activities.</li>
        <li><strong>Valuation Services: </strong> Providing valuation services for businesses, assets, and intellectual property.</li>
        <li><strong>Feasibility Studies: </strong> Conducting feasibility studies to assess the viability of new projects or business ventures.</li>
        <li><strong>Business Process Improvement: </strong> Analyzing and improving business processes to enhance efficiency, reduce costs, and improve customer satisfaction.</li>
        </ul>
    </div>
  </div>

</ServiceAccordion>

</div>
</section>

  );
}
