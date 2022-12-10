import { useState } from "react";
import Current from "./CurrentMembers";
import './Staff.css'
//current members
import ashley from "../staffpics/ashley.png";
import isaac from "../staffpics/isaac.png";
import khashayar from "../staffpics/khashayar.png";
import madhuri from "../staffpics/madhuri.png";
import mahlet from "../staffpics/mahlet.png";
import natalie from "../staffpics/natalie.png";
import othneil from "../staffpics/othneil.png";
import quinton from "../staffpics/quinton.png";
import shivam from "../staffpics/shivam.png";
import yelena from "../staffpics/yelena.png";
import anubhav from "../staffpics/anubhav.png";
import ariana from "../staffpics/ariana.png";
//former members
import aditya from "../staffpics/formerstaff/aditya.png"
import anjali from "../staffpics/formerstaff/anjali.png"
import ansley from "../staffpics/formerstaff/ansley.png"
import carlito from "../staffpics/formerstaff/carlito.png"
import courtney from "../staffpics/formerstaff/courtney.png"
import farinaz from "../staffpics/formerstaff/farinaz.png"
import kunal from "../staffpics/formerstaff/kunal.png"
import lawrence from "../staffpics/formerstaff/lawrence.png"
import pelargos from "../staffpics/formerstaff/pelargos.png"
import prasanth from "../staffpics/formerstaff/prasanth.png"
import roan from "../staffpics/formerstaff/roan.png"
import vera from "../staffpics/formerstaff/vera.png"
import winward from "../staffpics/formerstaff/winward.png"

const StaffPage = () => {
  const currentStaff = [
    {
      id: 0,
      name: "Isaac Yang, MD",
      role: "Principal Investigator",
      description:
        "Dr. Isaac Yang is a Professor in the Department of Neurological Surgery at UCLA. Dr. Yang earned his medical degree from the David Geffen School of Medicine at UCLA before completing residency and a postdoctoral fellowship in brain tumor molecular biology and immunotherapy at the University of California, San Francisco (UCSF). As a neurosurgeon, he specializes in the surgical treatment and clinical outcomes of adult brain and spinal cord tumors, with a focus on acoustic neuromas, skull-based tumors and brain motor and neurophysiologic mapping. As as a Principal Investigator at the UCLA Brain Tumor Program, his extensive research interests include optimizing brain tumor clinical outcomes, novel nanoparticles against brain tumors, and experimental glioblastoma therapies such as brain tumor vaccines. His research efforts into disease outcomes seek to maximize safe and effective treatments for patients with brain tumors.",
      task: null,
      image: isaac,
    },
    {
      id: 1,
      name: "Khashayar “Shayar” Mozaffari",
      role: "Researcher",
      task: "Medical Student Research Fellow",
      description:
        "Khashayar “Shayar” Mozaffari is our Medical Student Research Fellow. Shayar obtained a bachelor’s degree in Biological Sciences from University of California (UCSB) in 2016 and began medical school at The George Washington University in 2018. Following completion of his third year, Shayar is spending two dedicated research years in our laboratory to conduct clinical and translational research. During his free time, Shayar enjoys playing basketball and watching sports.",
      image: khashayar,
    },
    {
      id: 2,
      name: "Yelena Malkhasyan",
      role: "Researcher",
      task: "Lab Manager",
      description:
        "Yelena Malkhasyan is the Yang Lab manager. She received her Neuroscience (B.S.) and Musicology (B.A.) degrees from UCLA in 2021. Yelena is passionate about neuroscience research and hopes to pursue a career as a physician. During her free time, Yelena enjoys playing the violin and reading books.",
      image: yelena,
    },
    {
      id: 3,
      name: "Mahlet Mekonnen",
      role: "Researcher",
      task: "Postgraduate Researcher",
      description:
        "Mahlet Mekonnen received her B.S. degrees in Neuroscience and Biochemistry from UCLA. As a postgraduate researcher in Dr. Yang's laboratory, she works in various clinical studies of neurological cases. In the future, Mahlet hopes to pursue a career in Medicine and Translational Research.",
      image: mahlet,
    },
    {
      id: 4,
      name: "Othneil Noble Sparks",
      role: "Researcher",
      task: "Medical Student Researcher",
      description:
        "Othneil Noble Sparks is a second-year medical student at UCLA. He is from Plainsboro, New Jersey, and went to Rice University in Houston, Texas where he graduated with a Bachelor of Science in Biochemistry and Cell Biology. As a future medical provider, he enjoys research because of the vast amount of medical knowledge that remains to be discovered and translated into therapeutics to heal patients. During his free time, he loves to mentor, teach, cook, explore LA’s art and beautiful landscapes, or catch up with friends and colleagues",
      image: othneil,
    },
    {
      id: 5,
      name: "Ashley Bo Zhang",
      role: "Researcher",
      task: "Medical Student Researcher",
      description:
        "Ashley B. Zhang is a second-year medical student at Sidney Kimmel Medical College at Thomas Jefferson University. She pursued her undergraduate studies in Laboratory Medicine and Pathobiology, and Biochemistry the University of Toronto in Canada. She then went on to complete her Master of Science researching ALS at the Tanz Centre for Research in Neurodegenerative Diseases. Prior to medical school, she worked as a Study Coordinator in trigeminal neuralgia research. She is passionate about mentorship and medical education. In her free time, Ashley can be found exploring Philly’s food scene, hiking, doodling, and trying to teach her friends Canadian slang, eh.",
      image: ashley,
    },
    {
      id: 6,
      name: "Anubhav Chandla",
      role: "Researcher",
      task: "Undergraduate Researcher",
      description:
        "Anubhav Chandla is a second-year undergraduate student studying neuroscience. As part of Yang Lab, he is passionate about furthering his knowledge about newly-developing neurosurgical treatments through clinical research. After graduation, he hopes to go to medical school and pursue a career as a physician-scientist. In his free time, he enjoys playing tennis, performing as a musician, and spending time with friends.",
      image: anubhav,
    },
    {
      id: 7,
      name: "Ariana Chow",
      role: "Researcher",
      task: "Undergraduate Researcher",
      description:
        "Ariana Chow is a fourth-year undergraduate student pursuing a major in Cognitive Science and a Specialization in Computing. Outside of the Yang Lab, Ariana works as a Registered Behavior Technician and volunteers with the Surgery Group of LA and Cedars Sinai Emergency Department. Her passions lie in cognitive development, ethical theory, and healthcare policy. In her free time, Ariana enjoys crocheting, audiobooks, cooking, and tennis.",
      image: ariana,
    },
    {
      id: 8,
      name: "Natalie Mahgerefteh",
      role: "Researcher",
      task: "Undergraduate Researcher",
      description:
        "Natalie Mahgerefteh is a third-year Neuroscience major at UCLA. Outside of the Yang Lab, she is involved in neuroscience and global health-related clubs and volunteering organizations. She is from Huntington Beach, CA, and enjoys reading, listening to music, and traveling.",
      image: natalie,
    },
    {
      id: 9,
      name: "Shivam Rana",
      role: "Researcher",
      task: "Undergraduate Researcher",
      description:
        "Shivam is a fourth-year undergraduate student majoring in Physiological Science and minoring in Entrepreneurship. Outside of the Yang Lab, Shivam is a Research Coordinator for the Emergency Medicine Research Associates program at UCLA's Emergency Department. He also volunteers with the oncology department at West LA Kaiser and the local Boy Scout Troop as an Adult Leader. Shivam is interested in the intersection of business and medicine. In his free time, Shivam enjoys being outdoors, cooking, and lifting.",
      image: shivam,
    },
    {
      id: 10,
      name: "Madhuri Wadehra, PhD",
      role: "Collaborator",
      task: "Collaborator",
      description:
        "Dr. Madhuri Wadehra is an Associate Professor in the Department of Pathology and Laboratory Medicine at UCLA and a member of the Jonsson Comprehensive Cancer Center. She holds a joint appointment as a Research Associate Professor within the Division of Cancer Research and Training at Charles Drew University. Dr. Wadehra has almost 15 years of experience in tumor biology, cell biology, and immunology, and is a leading expert on EMP2 biology. Currently, the focus of Dr. Wadehra’s research invovles i) understanding the physiological function of a tetraspan protein epithelial membrane protein-2 (EMP2) family of proteins, and ii) investigating the role of EMP2 in cancer. Over the last five years, Drs. Wadehra and Yang have collaborated extensively on understanding EMP2 expression in brain tumors, and together have published 5 papers, with 2 additional in preparation.",
      image: madhuri,
    },
    {
      id: 11,
      name: "Quinton S. Gopen, MD",
      role: "Collaborator",
      task: "Collaborator",
      description:
        "Dr. Quinton S. Gopen is an Associate Professor of Clinical Head & Neck Surgery at the David Geffen School of Medicine at UCLA. As an otolaryngologist, he specializes in the pediatric and adult ear and skull base conditions. Dr. Gopen earned his medical degree from Stanford University School of Medicine before completing residency in Otolaryngology at UCLA School Medicine and a postdoctoral fellowship in Neurology at the University of California, San Diego (UCSD) Medical Center. The collaborative research efforts of Drs. Gopen and Yang focus on Superior Semicircular Canal Dehiscence (SSCD).",
      image: quinton,
    },
  ];

  const formerstaff = [
    {
      id: 0,
      name: "Prasanth Romiyo, MD",
      role: "Alumni-Resident",
      task: "Resident (PGY-2)",
      description:
        "Dr. Prasanth Romiyo is from Philadelphia, Pennsylvania where he graduated from Cooper Medical School with a distinction in research. He was elected as the Gurtin Skull-Base research fellow at UCLA, where he spent a year studying nanoparticle delivery methods for immunotherapies with funding awarded through the AOA, NREF and AANS. Currently, Dr. Romiyo is a neurosurgery resident the School of Medicine & Dentistry at the University of Rochester.",
      image: prasanth,
    },
    {
      id: 1,
      name: "Lawrence Chung, MD",
      role: "Alumni-Resident",
      task: "Resident (PGY-4)",
      description:
        "Dr. Lawrance Chung earned his MD from the David Geffen School of Medicine at UCLA following a BS in Biology from UCLA. He is currently a neurosurgery resident at Keck Medicine of USC. He first met Dr. Yang as an undergraduate through their involvement in the American Medical Student Association at UCLA. As a medical student in Dr. Yang’s lab, he published numerous manuscripts in both basic science and clinical neurosurgery, with a particular focus on intracranial tumors and skull base pathology and was the recipient of 9 research grants. During his free time, he enjoys watching movies, playing board games with friends, rock climbing, and exploring nature. He plans on pursuing a career in spine neurosurgery following residency.",
      image: lawrence,
    },
    {
      id: 2,
      name: "Carlito Lagman",
      role: "Alumni-Resident",
      task: "Resident (PGY-4)",
      description:
        "Dr. Carlito Lagman earned his neuroscience degree from University of Southern California (USC). He worked as a Certified Surgical Technologist for a plastic surgeon prior to attending Cooper Medical School in New Jersey. He went on to complete the Gurtin Skull Base Clinical Research Fellowship at UCLA. Currently, Dr. Lagman is a neurosurgery resident at Case Western Reserve University-University Hospitals Cleveland Medical Center. His neurosurgical interests are tumor, skull base and cerebrovascular neurosurgery.",
      image: carlito,
    },
    {
      id: 3,
      name: "Pelargos Panayiotis, MD, MS",
      role: "Alumni-Resident",
      task: "Resident (PGY-6)",
      description:
        "Dr. Pelargos Panayiotis earned his graduate degree from the Institute for Clinical & Translational Science at the University of California, Irvine and his medical degree from the University of California, Irvine School of Medicine. During medical school, he spent two years in the Yang Lab conducting clinical and translational research. Some of this research projects included investigating the role of EMP2 in glioblastoma development, the effectiveness of CCL21-coupled vault nanoparticles in treating glioblastoma in mouse models, and the effectiveness of LITT in treating various metastatic and primary tumors. His hobbies includes sports, especially basketball and soccer, and reading. Currently, Dr. Panayiotis is a neurosurgery resident at the University of Oklahoma and is interested in skull base surgery and neuro-oncology. He will be completing a fellowship in skull base surgery and advanced surgical neuro-oncology at Washington University in St. Louis upon graduation and then going on to a career in academic neurosurgery.",
      image: pelargos,
    },
    {
      id: 4,
      name: "Winward Choy, MD",
      role: "Alumni-Resident",
      task: "Resident (PGY-6)",
      description:
        "Dr. Winward Choy is currently a neurosurgery resident at UCSF. After receiving his undergraduate degree from UC Berkeley, he attended UCLA for medical school. There, he developed an initial interest in neurosurgery through research in brain tumors and immunotherapies. During residency, he developed a clinical and research interest in the treatment of spine pathologies.",
        image: winward
    },
    {
      id: 5,
      name: "Kunal Patel, MD",
      role: "Alumni-Resident",
      task: "Resident (PGY-7)",
      description:
        "Dr. Kunal Patel earned his medical degree from Weill Cornell Medicine. He is currently the chief neurosurgery resident at UCLA. During his dedicated research year in residency, he studied the role of EMP2 in glioblastoma and meningioma models.",
        image: kunal
    },
    {
      id: 6,
      name: "Courtney Doung",
      role: "Alumni",
      task: "Lab Manager",
      description:
        "Courtney Duong graduated from the University of California at Davis with a degree in Neurobiology, Physiology, and Behavior Sciences. She joined the team as a volunteer in her senior summer and returned as lab manager after finishing her studies. She led the team for five years, to over a dozen national conferences, successfully facilitated more than 100 publications during her tenure, and helped the lab win multiple grants and funding opportunities. She absolutely loved all the students and volunteers she has gotten to meet and is extremely thankful she was able to be a part of their journey. In her free time, she loves to explore the bustling LA restaurant scene, hike with her dog, Archie, read science fiction novels, and play video games.",
      image: courtney,
    },
    {
      id: 7,
      name: "Farinaz Ghodrati",
      role: "Alumni",
      task: "Medical Student Researcher",
      description:
        "Farinaz Ghodrati is a third-year medical student at the David Geffen School of Medicine at UCLA. She pursued her undergraduate studies majoring in Neuroscience at the University of Toronto in Canada. She then went on to complete her Master of Science researching prion diseases at the Tanz Centre for Research in Neurodegenerative Diseases. Prior to attending DGSOM, Farinaz was involved in research in the field of Neuro-oncology at the Keenan Research Centre for Biomedical Science. In addition to her interest in healthcare and clinical research, she is also passionate about medical education, mentorship, and teaching. When not trying to troubleshoot her R code, Farinaz can be found listening to podcasts and exploring the local food scene.",
      image: farinaz,
    },
    {
      id: 8,
      name: "Aditya “Adi” Kondajji",
      role: "Alumni",
      task: "Medical Student Researcher",
      description:
        "Farinaz Ghodrati is a third-year medical student at the David Geffen School of Medicine at UCLA. She pursued her undergraduate studies majoring in Neuroscience at the University of Toronto in Canada. She then went on to complete her Master of Science researching prion diseases at the Tanz Centre for Research in Neurodegenerative Diseases. Prior to attending DGSOM, Farinaz was involved in research in the field of Neuro-oncology at the Keenan Research Centre for Biomedical Science. In addition to her interest in healthcare and clinical research, she is also passionate about medical education, mentorship, and teaching. When not trying to troubleshoot her R code, Farinaz can be found listening to podcasts and exploring the local food scene.",
      image: aditya,
    },
    {
      id: 9,
      name: "Vera Ong",
      role: "Alumni",
      task: "Medical Student Researcher",
      description:
        "Vera Ong is a third-year medical student at the University of Hawaii. She graduated from UCLA in 2020 and has doing research with the Yang lab since 2016. Other than research, her hobbies include volleyball, singing, dancing, and playing guitar.",
      image: vera,
    },
    {
      id: 10,
      name: "Anjali Pradhan",
      role: "Alumni",
      task: "Medical Student Researcher",
      description:
        "Anjali Pradhan is a third-year medical student at the David Geffen School of Medicine at UCLA. She is originally from the Bay Area where she received her BA in Molecular and Cell Biology from the University of California, Berkeley. Her interest in neurosurgery originated from her experience conducting neuroscience research in high school and college at Stanford University School of Medicine. Moreover, her passion for global medicine and global neurosurgery arises from her background as a Maternal & Child Health Specialist when she served as a Peace Corps Volunteer in Rwanda. In her free time, she enjoys running, surfing or any water sport, spending time with her family & cat, and traveling.",
      image: anjali,
    },
    {
      id: 11,
      name: "Ansley UnterBerger",
      role: "Alumni",
      task: "Medical Student Researcher",
      description:
        "As a freshman at Emory University, Ansley Unterberger joined her first neuroscience lab and began exploring the mind to understand those elements that make us all human. Ultimately, she graduated Summa Cum Laude with a BS in neuroscience and behavioral biology and a minor in visual arts. Since then, she has worked in four neuroscience labs. Each lab has nurtured her curiosity and reinvigorated her passion for scientific investigation, but as a medical student at DGSOM, she has had the privilege to explore oncological neurosurgery in Dr. Yang’s laboratory. Cancer has touched nearly everyone's lives. Therefore, his lab’s work investigating brain tumor biology, gene therapy, immunotherapy, and brain cancer vaccines stands to change the course of medical history. As a current fourth-year student, when she envisions her future neurosurgical career, research is inextricably linked with clinical work. In the future, she hope to emulate her mentor’s example and work at an academic institution, where she might contribute to innovative and compassionate patient care through both research and surgical modalities.",
      image: ansley,
    },
    {
      id: 12,
      name: "Roan Anderson",
      role: "Alumni",
      task: "Undergraduate Researcher",
      description:
        "Roan Anderson is from Fort Worth, TX, and graduated from UCLA in 2022. She has been with the lab since December of 2018 and is currently working at UCLA Health in the Plastic Surgery Department while preparing to apply for medical school. #GoBruins",
      image: roan,
    },
  ];

  const [member, setMember] = useState("Current");

  const formChangeHandler = (event) => {
    setMember(event.target.value);
  };

  return (
    <div className="member-alum">
      <div className="desc-cont">
        <label htmlFor="researches">Members: </label>
        <select
          defaultValue={member}
          onChange={formChangeHandler}
          name="researches"
          id="researches"
        >
          <option value="Current">Current</option>
          <option value="Former">Former</option>
        </select>
      </div>
      {member === "Current" && (
        <div>
          <h1>Current Members</h1>
          <h2>Principal Investigator</h2>
          <Current
            current={currentStaff.filter(
              (person) => person.role === "Principal Investigator"
            )}
          />
          <h2>Researchers</h2>
          <Current
            current={currentStaff.filter(
              (person) => person.role === "Researcher"
            )}
          />
          <h2>Collaborators</h2>
          <Current
            current={currentStaff.filter(
              (person) => person.role === "Collaborator"
            )}
          />
        </div>
      )}
      {member === "Former" && (
        <div>
          <h1>Former Members</h1>
          <h2>Alumni - Residents</h2>
          <Current
            current={formerstaff.filter(
              (person) => person.role === "Alumni-Resident"
            )}
          />
          <h2>Alumni</h2>
          <Current
            current={formerstaff.filter(
              (person) => person.role === "Alumni"
            )}
          />
          
        </div>
      )}
    </div>
  );
};

export default StaffPage;
