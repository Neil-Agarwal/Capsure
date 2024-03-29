# Capsure
Designed and implemented during EngHack 2019, Capsure is an accessible, cross-platform medication delivery tool that streamlines the interaction between patient and physician.

## What it does
Capsure is an accessible, voice-based, cross-platform medical delivery tool to be used by patients with chronic illnesses to manage their medication intake and effects, to improve the quality of care they receive from medical professionals.

## Inspiration
Medication non-adherence, which is when patients venture away from their doctor-prescribed medication plans, is widely regarded by healthcare practitioners as a common and costly issue. Accordinging to a study by Stanford University, 30% to 50% of US adults are not adherent to long-term medications leading to an estimated $100 billion in preventable costs annually [1]. Our team was initially drawn to this problem space through ideation that occurred via the market opportunity navigator design methodology. 

## Value proposition
As stated earlier, medication non-adherence leads to a 100 billion dollar cost that is entirely preventable. This cost is causing a financial strain on various healthcare entities, notably insurance companies who pay deductibles on every purchased medication. The value that Capsure can bring is to close the gap in communication between medical professionals and patients, preventing the huge cost that places unnecessary strain on our systems. Insurance companies can benefit significantly from the implementation of our system, allowing partnered doctors and patients to provide better data to insurance companies and ensuring that patients stay as healthy as possible. Pharmaceutical companies can also benefit significantly from the comments provided by patients, allowing for better monitoring of side effects of different medicine. This data, with the consent of doctors and patients, can help push the pharmaceutical industry towards continual improvement.

## How we built it
The market opportunity navigator was used to help define our problem space. It was identified that the team’s most applicable abilities along with desired technological elements centred around voice assistant interfaces, accessible design, databases, and cross-platform development. These abilities were combined into possible applications in education, health, and insurance. The team believed an assistive shared record-keeping product could be created with the chosen technological elements. After evaluating different market opportunities and creating an attractiveness map, it was decided that the focus would be around family doctors and their patients. The team had a brainstorming session to further narrow the scope of the project into a situation impact statement.

To create a truly cross-platform tool, we leveraged build.stdlib.com to create manageable and closely integrated APIs that can be used as endpoints across a multitude of interfaces. Using the built-in integration with Airtable, Google Sheets and stdlib’s Utils, we used Amazon Alexa and Actions on Google to interface with these powerful APIs to save patient medication comments and set medication reminders. The flexibility of Airtable, familiarity of Google Sheets and ubiquity of SMS messaging abilities allowed us to create a highly interconnected data and reminder store that is platform agnostic. To demonstrate the power of stdlib’s build tool, we created multiple API endpoints that were called from the Alexa Skills Kit and Dialogflow. These endpoints correspond to different actions we wanted to happen, such as adding rows to Google Sheets, sending an SMS message, or updating Airtable.

## Challenges we ran into
Due to the open-ended nature of the hackathon, our team struggled quite a bit when it came to deciding on a focus for our hack. In the pursuit of finding a brilliant idea that not only had obvious real world application but was also feasible to build in the span of a weekend and was innovative enough to amaze anyone we pitched it to, we quickly burned through a day or one third of our hack time with nothing to show for it. Fortunately, we were able to use the market opportunity navigator design methodology to analytically narrow down and identify our problem space that ultimately led to a hack that every member of our team is proud of. 

Another challenge that the team encountered was that the voice assistants we chose to use had unforeseen limitations. For example, Google’s voice assistant does not integrate with third-party APIs without billing information and Amazon’s Alexa does not capture freeform text.

## Accomplishments that we’re proud of
The integration between stdlib build, a new technology that no one on the team had used before, and the two voice assistants, Alexa and Google Home Mini, worked exactly how the team had envisioned which was incredibly satisfying. Beyond the integration of components and the ultimate final product, we are also proud of the design principles used to ideate and build the foundation of Capsure.

## What we learned
The main learnings that we gained from building this product from scratch would be how to use tools such as the stdlib build tool and voice assistance interfaces. We learned more about how the market plays into the success of a product and how important design and planning is in the product development stages. We were able to learn more about the market opportunity navigator which allowed us to explore the market of our product in detail.

We also learned about stdlib and its ability to create powerful APIs using an all-in-one-tool, providing us better options in the future when needing to create good APIs. Furthermore, we learnt a lot more about the design thinking process and how to approach a problem, ensuring that we understand both the problem space and the business case for creating a solution.

## What's next for Capsure
In our next iteration, we would like to allow users to input recurring reminders to improve efficiency. Furthermore, it will also be fruitful to approach insurance companies who are our main customers to evaluate their interest in the product and ask them what features they would like to see implemented.   

Once we have implemented all the features in the next iteration, Capsure needs to undergo user testing to better understand the needs of our users and to evaluate how well the current prototype fits that mould. The team will approach doctors in the KW area and offer our product free for use for three months, such that they can provide feedback as well as hopefully enjoy and continue to use our product. Through these user interviews, the team can also gauge interest for a web or mobile interface to accompany the existing product. Creation of an accompanying web or mobile application would be addressed in later iterations.

[1] https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3976600/
