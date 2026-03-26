
"use client";

import ServiceAccordion from "./ServiceAccordion";

export default function Services() {
  const bulletIndentStyle = { paddingLeft: "3rem" };
  const bulletIndentStyleDeep = { paddingLeft: "3.5rem" };

  return (
    <section className="bg-[#f2ede6] py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-3xl font-bold text-[#18233d] md:mb-8 md:text-4xl lg:text-5xl">
          Accounting Services in Mindanao
        </h2>

        <div className="mx-auto mb-14 max-w-3xl space-y-5 text-center">
          <p className="text-base leading-7 text-[#50596b] md:text-lg md:leading-relaxed">
            Businesses today operate in an increasingly regulated and
            competitive environment. Accurate financial reporting, regulatory
            compliance, and strategic planning are no longer optional. They are
            essential to long term sustainability.
          </p>

          <p className="text-base leading-7 text-[#50596b] md:text-lg md:leading-relaxed">
            We provide comprehensive accounting services Mindanao companies rely
            on to maintain financial clarity, strengthen compliance, and
            support informed decision making. Our firm serves businesses across
            Mindanao with physical offices in Kidapawan City, Midsayap,
            Koronadal City, Samal, Bukidnon, and Davao City, allowing us to
            deliver responsive and localized professional support.
          </p>

          <p className="text-base leading-7 text-[#50596b] md:text-lg md:leading-relaxed">
            We provide comprehensive accounting, audit, tax, and financial
            advisory services tailored to meet the evolving needs of businesses
            in North Cotabato and beyond.
          </p>

          <p className="text-base leading-7 text-[#50596b] md:text-lg md:leading-relaxed">
            Our team of experienced professionals is committed to delivering
            accurate, transparent, and strategic financial solutions that help
            organizations grow with confidence.
          </p>

          <p className="pb-2 text-base leading-7 text-[#50596b] md:text-lg md:leading-relaxed">
            Through a fully integrated approach covering audit, financial
            reporting, taxation, bookkeeping, payroll, advisory, and corporate
            compliance, we provide structured financial systems that help
            organizations operate confidently and grow responsibly.
          </p>
        </div>

        <div className="space-y-8 lg:space-y-10">
          <ServiceAccordion
            index={0}
            imageSrc="/img/services/audit-assurance.JPG"
            title="Audit & Assurance"
            summary="Independent audit and assurance engagements that strengthen credibility, sharpen internal controls, and build confidence with regulators, lenders, and stakeholders."
          >
            <p className="mb-4 text-gray-600">
              Reliable audit and assurance services provide credibility,
              transparency, and operational discipline. Our firm delivers
              independent audit and assurance engagements to businesses
              throughout Mindanao seeking structured financial oversight and
              regulatory compliance.
            </p>
            <p className="mb-4 text-gray-600">
              Our audit services are designed to strengthen internal governance,
              support stakeholder confidence, and ensure compliance with
              applicable accounting standards.
            </p>

            <div className="space-y-5">
              <div>
                <h4 className="mb-2 pl-6 text-lg font-semibold">
                  Financial Statement Audits
                </h4>
                <p className="mb-4 pl-6 text-gray-600">
                  We conduct independent financial statement audits to
                  determine whether financial statements are presented fairly,
                  in all material respects, in accordance with Philippine
                  Financial Reporting Standards.
                </p>
                <p className="mb-4 pl-6 text-gray-600">
                  Our audit methodology includes risk assessment, evaluation of
                  internal controls, substantive testing, and analytical review
                  procedures. These engagements are particularly valuable for
                  companies seeking financing, investor confidence, regulatory
                  compliance, or enhanced financial credibility.
                </p>
              </div>

              <div>
                <h3 className="mb-2 pl-6 text-lg font-semibold">
                  Internal Audit Services
                </h3>
                <p className="mb-4 pl-6 text-gray-600">
                  Internal audit services focus on improving operational
                  efficiency and strengthening internal controls. We evaluate
                  governance frameworks, risk management procedures, and control
                  systems to identify weaknesses and recommend improvements.
                </p>
                <p className="mb-4 pl-6 text-gray-600">
                  This service integrates naturally with our Risk Management and
                  Internal Controls advisory support.
                </p>
              </div>

              <div>
                <h4 className="mb-2 pl-6 text-lg font-semibold">
                  Compliance Audits
                </h4>
                <p className="pl-6 text-gray-600">
                  We assess adherence to regulatory requirements, contractual
                  obligations, and internal policies. Compliance audits help
                  prevent regulatory penalties and operational disruptions.
                </p>
              </div>

              <div>
                <h4 className="mb-2 pl-6 text-lg font-semibold">
                  Review & Compilation Engagements
                </h4>
                <p className="pl-6 text-gray-600">
                  For companies that do not require a full audit opinion, we
                  provide review and compilation services that ensure financial
                  information is structured, consistent, and professionally
                  prepared.
                </p>
              </div>

              <div>
                <h4 className="mb-2 pl-6 text-lg font-semibold">
                  Agreed Upon Procedures Engagements
                </h4>
                <p className="pl-6 text-gray-600">
                  We perform specific audit procedures requested by management
                  or third parties and provide factual findings reports tailored
                  to the engagement objectives.
                </p>
              </div>

              <div>
                <h4 className="mb-2 pl-6 text-lg font-semibold">
                  Specialized Assurance Services
                </h4>
                <p className="pl-6 text-gray-600">
                  We provide assurance engagements designed for specific
                  industries or regulatory requirements, adapting our
                  methodology to client needs.
                </p>
              </div>
            </div>
          </ServiceAccordion>

          <ServiceAccordion
            index={1}
            imageSrc="/img/services/accounting-financial-reporting.JPG"
            title="Accounting & Financial Reporting"
            summary="Structured accounting and reporting systems that keep financial records accurate, support strategic decisions, and maintain compliance across everyday operations."
          >
            <p className="mb-4 text-gray-600">
              Accurate accounting systems are fundamental to sustainable
              business operations. Our accounting services in Mindanao are
              designed to maintain structured financial records, improve
              reporting accuracy, and enhance management decision making.
            </p>

            <p className="mb-4 text-gray-600">
              We support companies operating in Kidapawan, Midsayap, Koronadal,
              and surrounding municipalities in building reliable accounting
              frameworks that promote long term financial stability.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 pl-6 text-lg font-semibold">
                  Core Accounting
                </h4>

                <ul
                  className="list-disc list-outside space-y-2 text-gray-600"
                  style={bulletIndentStyle}
                >
                  <li>
                    <strong>General Ledger Maintenance - </strong>
                    We maintain comprehensive and properly structured general
                    ledgers to ensure accurate documentation of all
                    transactions.
                  </li>
                  <li>
                    <strong>Bank Reconciliations - </strong>
                    We reconcile internal accounting records with bank
                    statements to detect discrepancies and maintain reporting
                    integrity.
                  </li>
                  <li>
                    <strong>Accounts Payable & Receivable Management - </strong>
                    We assist businesses in managing supplier obligations and
                    customer receivables to improve working capital management.
                  </li>
                </ul>

                <p className="mb-3 mt-3 pl-6 text-gray-600">
                  These services integrate directly with our Bookkeeping
                  Services and Payroll Services to ensure consistency across
                  financial systems.
                </p>
              </div>

              <div>
                <h4 className="mb-2 pl-6 text-lg font-semibold">
                  Financial Reporting
                </h4>

                <ul
                  className="list-disc list-outside space-y-2 text-gray-600"
                  style={bulletIndentStyle}
                >
                  <li>
                    <strong>Preparation of Financial Statements - </strong>
                    We prepare complete financial statements in accordance with
                    Philippine standards, ensuring accuracy and compliance.
                  </li>
                  <li>
                    <strong>Management Reporting - </strong>
                    We develop customized financial reports and performance
                    indicators to support strategic decision making.
                  </li>
                  <li>
                    <strong>Budgeting and Forecasting - </strong>
                    We assist in developing structured budgets and financial
                    projections that align with business objectives.
                  </li>
                </ul>
              </div>
            </div>
          </ServiceAccordion>

          <ServiceAccordion
            index={2}
            imageSrc="/img/services/taxation.JPG"
            title="Taxation & Compliance"
            summary="Reliable tax and compliance support that helps organizations meet filing obligations on time, reduce risk exposure, and stay aligned with changing regulations."
          >
            <p className="mb-4 text-gray-600">
              Navigating taxation requires technical precision, timely
              reporting, and a clear understanding of evolving regulations. We
              assist businesses across Mindanao in managing tax obligations
              efficiently while minimizing risk and exposure to penalties.
            </p>

            <p className="mb-4 text-gray-600">
              Our tax filing services form part of our integrated compliance
              support framework for organizations operating in Kidapawan,
              Midsayap, Koronadal, and nearby municipalities.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 pl-6 text-lg font-semibold">
                  Tax Compliance Services
                </h4>
                <p className="mb-3 pl-6 text-gray-600">
                  We ensure businesses meet their obligations under the Bureau
                  of Internal Revenue and other regulatory authorities.
                </p>

                <ul
                  className="list-disc list-outside space-y-2 text-gray-600"
                  style={bulletIndentStyle}
                >
                  <li>
                    <strong>Tax Return Preparation and Filing - </strong>
                    We prepare and file annual income tax returns, quarterly
                    percentage and VAT returns, withholding tax returns, and
                    other required filings accurately and on schedule to prevent
                    penalties and interest charges.
                  </li>
                  <li>
                    <strong>Tax Planning and Advisory - </strong>
                    We provide structured tax strategies that help minimize
                    liabilities while maintaining full compliance. This includes
                    identifying allowable deductions, incentives, and strategic
                    planning opportunities.
                  </li>
                  <li>
                    <strong>Tax Compliance Reviews - </strong>
                    We conduct detailed assessments of tax records, accounting
                    entries, and reporting procedures to identify compliance
                    gaps and recommend corrective actions.
                  </li>
                  <li>
                    <strong>Tax Audit Assistance - </strong>
                    We represent clients during BIR audits by coordinating
                    documentation, responding to inquiries, and assisting in
                    resolution discussions to ensure a smooth audit process.
                  </li>
                </ul>

                <p className="mb-3 mt-3 pl-6 text-gray-600">
                  These services integrate closely with our Accounting and
                  Financial Reporting and Payroll Services to maintain
                  consistency across financial reporting.
                </p>
              </div>

              <div>
                <h4 className="mb-2 pl-6 text-lg font-semibold">
                  Regulatory Compliance Services
                </h4>
                <p className="mb-3 pl-6 text-gray-600">
                  Beyond taxation, businesses must comply with corporate
                  governance, regulatory filings, and statutory requirements. We
                  assist companies throughout Mindanao in maintaining proper
                  legal and regulatory standing.
                </p>

                <ul
                  className="list-disc list-outside space-y-2 text-gray-600"
                  style={bulletIndentStyle}
                >
                  <li>
                    <strong>Compliance Program Development - </strong>
                    We help design structured compliance programs tailored to
                    industry specific requirements and operational risk levels.
                  </li>
                  <li>
                    <strong>Compliance Audits and Reviews - </strong>
                    We assess adherence to internal policies, contractual
                    obligations, and applicable regulations to identify
                    operational risks.
                  </li>
                  <li>
                    <strong>Corporate Governance Advisory - </strong>
                    We provide guidance on governance structures, board
                    responsibilities, and reporting transparency to promote
                    accountability.
                  </li>
                  <li>
                    <strong>Training and Education - </strong>
                    We conduct compliance oriented training sessions to promote
                    awareness and strengthen internal control culture.
                  </li>
                  <li>
                    <strong>Risk Management Advisory - </strong>
                    We identify financial and operational risks and develop
                    mitigation strategies to protect business assets.
                  </li>
                  <li>
                    <strong>Government Incentives Assistance - </strong>
                    We assist in identifying and applying for available tax
                    incentives and government programs.
                  </li>
                  <li>
                    <strong>Due Diligence Reviews - </strong>
                    We conduct compliance and financial due diligence for
                    mergers, acquisitions, or restructuring initiatives.
                  </li>
                  <li>
                    <strong>Estate and Trust Tax Services - </strong>
                    We provide tax planning and preparation services for estates
                    and trusts with complex reporting requirements.
                  </li>
                  <li>
                    <strong>Non-Filed Tax Returns Assistance - </strong>
                    We help businesses file overdue returns and implement
                    structured corrective compliance plans.
                  </li>
                </ul>
              </div>
            </div>
          </ServiceAccordion>

          <ServiceAccordion
            index={3}
            imageSrc="/img/services/bookkeeping-services.JPG"
            title="Bookkeeping Services"
            summary="Consistent bookkeeping support that keeps transactions organized, books current, and financial records ready for reporting, tax, and management review."
          >
            <p className="mb-6 text-gray-600">
              We offer reliable bookkeeping and payroll solutions to ensure
              seamless financial management and employee satisfaction.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 pl-6 text-lg font-semibold">
                  Bookkeeping Services
                </h4>
                <p className="mb-3 pl-6 text-gray-600">
                  Accurate bookkeeping ensures financial clarity, audit
                  readiness, and compliance. Our bookkeeping services support
                  organizations across Mindanao in maintaining reliable
                  financial records.
                </p>

                <p className="mb-4 pl-6 text-gray-600">
                  We provide ongoing bookkeeping support for small enterprises,
                  growing corporations, and established businesses seeking
                  structured financial systems.
                </p>

                <h4 className="mb-2 pl-6 text-lg font-semibold md:pl-8 lg:pl-12">
                  Core Bookkeeping Functions:
                </h4>
                <ul
                  className="list-disc list-outside space-y-2 text-gray-600"
                  style={bulletIndentStyleDeep}
                >
                  <li>
                    <strong>Transaction Recording - </strong>
                    We systematically record daily transactions including sales,
                    purchases, expenses, and payments in accordance with
                    accounting standards.
                  </li>
                  <li>
                    <strong>Cloud Accounting Solutions - </strong>
                    We implement secure and efficient cloud based accounting
                    platforms to improve accessibility and internal control.
                  </li>
                  <li>
                    <strong>Journal Entries and Adjustments - </strong>
                    We create and adjust journal entries to ensure accurate
                    account balances and correct classification of transactions.
                  </li>
                  <li>
                    <strong>Monthly Closing of Books - </strong>
                    We perform structured month end procedures to ensure
                    financial statements remain accurate and up to date.
                  </li>
                </ul>

                <p className="mb-3 mt-3 pl-6 text-gray-600 md:pl-8 lg:pl-12">
                  Bookkeeping services align directly with our Taxation and
                  Compliance and Audit and Assurance engagements to maintain
                  reporting consistency.
                </p>
              </div>
            </div>
          </ServiceAccordion>

          <ServiceAccordion
            index={4}
            imageSrc="/img/services/payroll-services.JPG"
            title="Payroll Services"
            summary="Accurate payroll administration that supports employee trust, statutory compliance, and reliable compensation processes for growing teams."
          >
            <p className="mb-6 text-gray-600">
              Payroll administration affects both compliance and employee
              satisfaction. We provide structured payroll services to businesses
              operating across Mindanao, ensuring timely compensation and
              regulatory adherence.
            </p>

            <div className="space-y-6">
              <p className="mb-3 mt-3 text-gray-600">
                Our payroll services form part of our integrated accounting
                support framework.
              </p>

              <h4 className="mb-2 pl-6 text-lg font-semibold md:pl-8 lg:pl-12">
                Payroll Management Services:
              </h4>
              <ul
                className="list-disc list-outside space-y-2 text-gray-600"
                style={bulletIndentStyleDeep}
              >
                <li>
                  <strong>Payroll Processing - </strong>
                  We calculate wages, overtime pay, allowances, deductions, and
                  net salaries accurately and on time.
                </li>
                <li>
                  <strong>Tax Withholding and Remittance - </strong>
                  We ensure proper withholding of payroll taxes and timely
                  remittance to government agencies.
                </li>
                <li>
                  <strong>Payroll Tax Compliance - </strong>
                  We manage payroll related reporting and ensure adherence to
                  labor and tax regulations.
                </li>
                <li>
                  <strong>13th Month Pay Computation - </strong>
                  We compute and process statutory 13th month pay in compliance
                  with Philippine labor standards.
                </li>
                  <li>
                    <strong>Final Pay Computation - </strong>
                    We prepare final compensation packages for employees leaving
                    the organization, including accrued benefits and statutory
                    deductions.
                  </li>
                  <li>
                    <strong>Statutory Benefits Administration - </strong>
                    We manage SSS, PhilHealth, and Pag IBIG contributions to
                    ensure accurate remittance and compliance.
                  </li>
              </ul>

              <p className="mb-3 mt-3 pl-6 text-gray-600 md:pl-8 lg:pl-12">
                Payroll services integrate seamlessly with our Bookkeeping
                Services and Tax Compliance support.
              </p>
            </div>
          </ServiceAccordion>

          <ServiceAccordion
            index={5}
            imageSrc="/img/services/business-advisory.JPG"
            title="Business Advisory & Financial Consultancy"
            summary="Practical advisory services focused on strategy, performance, financial planning, and risk management to help organizations grow with clarity and control."
          >
            <p className="mb-4 text-gray-600">
              Strong financial strategy supports sustainable growth and
              operational resilience. Our business advisory services Mindanao
              companies engage are focused on improving performance, managing
              risk, and guiding long term success.
            </p>

            <p className="mb-4 text-gray-600">
              We work closely with business owners, management teams, and
              stakeholders across the province to strengthen organizational
              foundations.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 pl-6 text-lg font-semibold">
                  Strategic Planning
                </h4>
                <p className="mb-3 pl-6 text-gray-600">
                  We assist organizations in defining long term goals and
                  developing structured strategies to achieve them.
                </p>

                <ul
                  className="list-disc list-outside space-y-2 text-gray-600"
                  style={bulletIndentStyle}
                >
                  <li>
                    <strong>Market Analysis - </strong>
                    We evaluate market conditions, competitive landscapes, and
                    industry trends to identify growth opportunities.
                  </li>
                  <li>
                    <strong>SWOT Analysis - </strong>
                    We assess strengths, weaknesses, opportunities, and threats
                    to inform strategic decisions.
                  </li>
                  <li>
                    <strong>Goal Setting and Strategy Development - </strong>
                    We establish measurable objectives and actionable roadmaps
                    aligned with business vision.
                  </li>
                  <li>
                    <strong>Implementation Planning - </strong>
                    We develop structured execution plans with defined timelines
                    and accountability measures.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 mt-4 pl-6 text-lg font-semibold">
                  Financial Management
                </h4>
                <p className="mb-3 pl-6 text-gray-600">
                  We help improve financial stability and operational efficiency
                  through structured financial analysis and planning.
                </p>

                <ul
                  className="list-disc list-outside space-y-2 text-gray-600"
                  style={bulletIndentStyle}
                >
                  <li>
                    <strong>Financial Analysis - </strong>
                    We evaluate financial statements, ratios, and key
                    performance indicators to assess overall health.
                  </li>
                  <li>
                    <strong>Budgeting and Forecasting - </strong>
                    We develop structured budgets and projections to guide
                    resource allocation.
                  </li>
                  <li>
                    <strong>Cost Management - </strong>
                    We identify cost saving opportunities and implement
                    efficiency measures.
                  </li>
                  <li>
                    <strong>Financial Restructuring - </strong>
                    We provide guidance on debt restructuring and capital
                    optimization strategies.
                  </li>
                  <li>
                    <strong>Investment Advisory - </strong>
                    We assist in evaluating investment opportunities and risk
                    exposure.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 mt-4 pl-6 text-lg font-semibold">
                  Operational Improvement
                </h4>
                <p className="mb-3 pl-6 text-gray-600">
                  We enhance business performance through structured operational
                  analysis.
                </p>

                <ul
                  className="list-disc list-outside space-y-2 text-gray-600"
                  style={bulletIndentStyle}
                >
                  <li>
                    <strong>Process Optimization - </strong>
                    We streamline workflows to eliminate inefficiencies.
                  </li>
                  <li>
                    <strong>Supply Chain Optimization - </strong>
                    We improve procurement and distribution systems to reduce
                    costs.
                  </li>
                  <li>
                    <strong>Technology Implementation - </strong>
                    We assist with financial system upgrades and automation.
                  </li>
                  <li>
                    <strong>Change Management - </strong>
                    We support structured transitions and organizational
                    improvements.
                  </li>
                  <li>
                    <strong>Performance Measurement - </strong>
                    We design KPI systems to track progress and accountability.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 mt-4 pl-6 text-lg font-semibold">
                  Risk Management
                </h4>
                <p className="mb-3 pl-6 text-gray-600">
                  We help organizations identify, assess, and mitigate
                  operational and financial risks.
                </p>

                <ul
                  className="list-disc list-outside space-y-2 text-gray-600"
                  style={bulletIndentStyle}
                >
                  <li>
                    <strong>Risk Assessment - </strong>
                    We evaluate potential financial, operational, and compliance
                    risks.
                  </li>
                  <li>
                    <strong>Mitigation Strategies - </strong>
                    We design internal controls and structured safeguards.
                  </li>
                  <li>
                    <strong>Compliance Monitoring - </strong>
                    We ensure continued adherence to applicable regulations.
                  </li>
                  <li>
                    <strong>Crisis Management Planning - </strong>
                    We develop contingency plans for unforeseen disruptions.
                  </li>
                  <li>
                    <strong>Internal Control Enhancement - </strong>
                    We strengthen control systems to prevent fraud and financial
                    misstatement.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 mt-4 pl-6 text-lg font-semibold">
                  Mergers, Acquisitions, and Restructuring
                </h4>
                <p className="mb-3 pl-6 text-gray-600">
                  We provide advisory support for significant business
                  transitions.
                </p>

                <ul
                  className="list-disc list-outside space-y-2 text-gray-600"
                  style={bulletIndentStyle}
                >
                  <li>
                    <strong>Due Diligence - </strong>
                    We assess financial and operational risks prior to
                    transactions.
                  </li>
                  <li>
                    <strong>Business Valuation - </strong>
                    We determine fair market value of businesses and assets.
                  </li>
                  <li>
                    <strong>Negotiation Support - </strong>
                    We assist in structuring agreements that align with
                    strategic goals.
                  </li>
                  <li>
                    <strong>Transaction Structuring - </strong>
                    We optimize deal frameworks to minimize risk and tax
                    exposure.
                  </li>
                  <li>
                    <strong>Integration Planning - </strong>
                    We guide post transaction integration for operational
                    continuity.
                  </li>
                  <li>
                    <strong>Restructuring and Turnaround - </strong>
                    We assist financially distressed organizations in
                    stabilizing operations and restoring profitability.
                  </li>
                </ul>
              </div>
            </div>
          </ServiceAccordion>

          <ServiceAccordion
            index={6}
            imageSrc="/img/services/regulatory-compliance.JPG"
            title="Regulatory Compliance & Corporate Services"
            summary="Hands-on corporate compliance support for registrations, filings, governance, and internal controls so businesses can operate with greater stability and confidence."
          >
            <p className="mb-6 text-gray-600">
              Maintaining corporate compliance is essential for operational
              stability. We assist businesses across Mindanao in navigating
              SEC, BIR, and local government requirements.
            </p>

            <p className="mb-8 text-gray-600">
              With accessible offices in Kidapawan City, Midsayap, Koronadal
              City, Samal, Bukidnon, and Davao City, we provide hands-on
              compliance support throughout the province.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 mt-4 pl-6 text-lg font-semibold">
                  Business Registration and Licensing
                </h4>
                <p className="mb-3 pl-6 text-gray-600">
                  We facilitate registration of corporations and partnerships
                  and assist in securing necessary permits and licenses.
                </p>

                <ul
                  className="list-disc list-outside space-y-2 text-gray-600"
                  style={bulletIndentStyle}
                >
                  <li>
                    <strong>SEC Registration - </strong>
                    Preparation and filing of incorporation documents.
                  </li>
                  <li>
                    <strong>Local Government Permits - </strong>
                    Assistance with Mayor's permits and local clearances.
                  </li>
                  <li>
                    <strong>BIR Registration - </strong>
                    Processing of Tax Identification Numbers and tax
                    registration requirements.
                  </li>
                  <li>
                    <strong>Industry Specific Permits - </strong>
                    Coordination with relevant agencies when applicable.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 mt-4 pl-6 text-lg font-semibold">
                  Corporate Secretarial Services
                </h4>
                <p className="mb-3 pl-6 text-gray-600">
                  We provide ongoing corporate governance and documentation
                  support.
                </p>

                <ul
                  className="list-disc list-outside space-y-2 text-gray-600"
                  style={bulletIndentStyle}
                >
                  <li>
                    <strong>Preparation of Corporate Documents - </strong>
                    Maintenance of articles, by laws, and meeting minutes.
                  </li>
                  <li>
                    <strong>Annual Report Filing - </strong>
                    Timely preparation and submission of required reports.
                  </li>
                  <li>
                    <strong>Board and Shareholder Meeting Support - </strong>
                    Preparation of notices, agendas, and documentation.
                  </li>
                  <li>
                    <strong>Governance Compliance - </strong>
                    Advisory on regulatory responsibilities and best practices.
                  </li>
                  <li>
                    <strong>Deadline Monitoring - </strong>
                    Tracking of compliance deadlines to prevent penalties.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 mt-4 pl-6 text-lg font-semibold">
                  SEC Compliance Services
                </h4>
                <p className="mb-3 pl-6 text-gray-600">
                  We assist with mandatory reporting obligations and regulatory
                  submissions.
                </p>

                <ul
                  className="list-disc list-outside space-y-2 text-gray-600"
                  style={bulletIndentStyle}
                >
                  <li>
                    <strong>Annual and Quarterly Filings - </strong>
                    Preparation and submission of required disclosures.
                  </li>
                  <li>
                    <strong>Current Report Filing - </strong>
                    Disclosure of material events.
                  </li>
                  <li>
                    <strong>SEC Audit Assistance - </strong>
                    Coordination during regulatory reviews.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 mt-4 pl-6 text-lg font-semibold">
                  Risk Management and Internal Controls
                </h4>
                <p className="mb-3 pl-6 text-gray-600">
                  We design and implement systems that safeguard assets and
                  ensure reporting accuracy.
                </p>

                <ul
                  className="list-disc list-outside space-y-2 text-gray-600"
                  style={bulletIndentStyle}
                >
                  <li>
                    <strong>Risk Assessment - </strong>
                    Identification of vulnerabilities.
                  </li>
                  <li>
                    <strong>Internal Control Design - </strong>
                    Structured control implementation.
                  </li>
                  <li>
                    <strong>Compliance Monitoring - </strong>
                    Ongoing evaluation of regulatory adherence.
                  </li>
                  <li>
                    <strong>Fraud Prevention - </strong>
                    Development of fraud detection and prevention measures.
                  </li>
                  <li>
                    <strong>Valuation Services - </strong>
                    Business and asset valuation support.
                  </li>
                  <li>
                    <strong>Feasibility Studies - </strong>
                    Assessment of new business ventures and expansion projects.
                  </li>
                  <li>
                    <strong>Business Process Improvement - </strong>
                    Analysis and enhancement of operational systems to improve
                    efficiency, reduce costs, and strengthen overall
                    performance.
                  </li>
                </ul>
              </div>
            </div>
          </ServiceAccordion>
        </div>
      </div>
    </section>
  );
}
