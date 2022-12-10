import sscd1 from "../ResearchImages/research_sscd_1.png";
import sscd2 from "../ResearchImages/research_sscd_2.png";
import mening1 from "../ResearchImages/research_mening_1.png";
import mening2 from "../ResearchImages/research_mening_2.png";
import vs1 from "../ResearchImages/research_vs_1.png";
import vs2 from "../ResearchImages/research_vs_2.png";
import "./Research.css";

const Research = (props) => {
  if (props.research === "SSCD") {
    return (
      <div className="sscd">
        <div className="sscdwords">
          <h1>Superior Semicircular Canal Dehiscence</h1>
          <p>
            Superior semicircular canal dehiscence (SSCD) is an increasingly
            recognized neurological condition in which the bone between the
            superior semicircular canal and the intracranial cavity is either
            thinned or missing, creating a third mobile window. Typically, sound
            is conducted from the middle ear through the fluid-filled inner ear
            via the oval and round mobile windows. In SSCD, the formation of a
            third window results in the transfer of mechanical energy away from
            the round window, to said third window.
          </p>
          <p>
            SSCD can present as a bilateral or unilateral syndrome. Patients
            with SSCD commonly present with tinnitus, hearing loss, hyperacusis,
            internal sound amplification, vertigo, and dizziness. Patients may
            also present with nystagmus induced by pressure or sound changes.
            Diagnosis of SSCD is confirmed using a combination of physical
            examination, physiological testing such as Cervical and Ocular
            Vestibular Evoked Myogenic Potential (VEMP) testing; in conjunction
            with temporal bone high resolution computed tomography (CT) imaging
            to visualize the defect.
          </p>
          <p>
            Conservative treatment of SSCD involves trigger avoidance and
            vestibular sedation. For patients with exacerbated, worsening, or
            debilitating symptoms, surgical management is indicated.
          </p>
          <p>
            Our lab focuses on improving surgical technique and patient outcomes
            along with exploring the etiological factors which drive the
            development and progression of SSCD. Working in close collaboration
            with Dr. Quinton Gopen, an otolaryngologist, our previous work has
            assessed the efficacy of middle cranial fossa surgical approach, the
            association between metabolic markers and SSCD symptoms, and
            differences in outcome between bilateral and unilateral SSCD
            patients.
          </p>
          <h2>Featured Publications</h2>
          <h3>2022</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.sciencedirect.com/science/article/abs/pii/S1878875022008750?via%3Dihub"
          >
            Assessment of Metabolic Markers and Osteoporosis in 250 SSCD
            Patients Treated With Middle Fossa Craniotomy
          </a>
          <h3>2021</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.sciencedirect.com/science/article/abs/pii/S1878875021014261?via%3Dihub"
          >
            Superior Semicircular Canal Dehiscence Revision Surgery Outcomes: A
            Single Institution's Experience
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.sciencedirect.com/science/article/abs/pii/S1878875021013760?via%3Dihub"
          >
            Superior Semicircular Canal Dehiscence Outcomes in a Consecutive
            Series of 229 Surgical Repairs With Middle Cranial Fossa Craniotomy
          </a>
          <h3>2018</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://journals.lww.com/neurosurgery/Abstract/2018/09000/Novel_Method_of_Measuring_Canal_Dehiscence_and.18.aspx"
          >
            Novel Method of Measuring Canal Dehiscence and Evaluation of its
            Potential as a Predictor of Symptom Outcomes After Middle Fossa
            Craniotomy
          </a>
        </div>
        <div className="sscdimages">
          <div className="box">
            <img src={sscd1} alt="SSCD1" />
            <div className="overlay">
              <p>
                Intraoperative minimally invasive middle fossa craniotomy
                exposure of the superior semicurcular canal. The arrow indicates
                the dehiscence.
              </p>
              <p>
                Mozaffari, K. et al. Superior semicurcular canal dehiscence
                revison survery outcomes: a single institution's experience.
                World neurosurgery 156 (2021) e408-e414
              </p>
            </div>
          </div>
          <div className="box">
            <img src={sscd2} alt="SSCD2" />
            <div className="overlay">
              <p>
                High-resolution computed tomography, which demonstates
                dehiscence of the left superior semicircular canal
              </p>
              <p>
                Mozaffari, K. et al. Superior semicurcular canal dehiscence
                revison survery outcomes: a single institution's experience.
                World neurosurgery 156 (2021) e408-e414
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.research === "Glioblastoma") {
    return (
      <div className="sscd">
        <div className="sscdwords">
          <h1>Glioblastoma</h1>
          <p>
            Glioblastoma Glioblastoma (GBM) is an aggressive and fast-growing
            brain tumor that arises from glial cells. As the most common and
            aggressive primary brain tumor in adults, it is associated with an
            extremely poor prognosis. Standard treatment comprises maximal
            surgical resection in conjunction with radiation and chemotherapy.
            Even so, clinical outcomes remain poor, and recurrence is common.
          </p>
          <p>
            Due to its nature as both a highly invasive and vascular tumor, GBM
            treatment has proven challenging. However, one growth factor that
            has been implicated in GBM is VEGF-A. For this reason, the
            monoclonal antibody bevacizumab has increasingly been used as
            adjuvant therapy for GBM and first-line treatment for recurrent GBM.
            Although bevacizumab has shown to decrease tumor enhancement
            intensity and prolong progression-free survival, there is no
            consensus on its efficacy regarding overall survival among GBM
            patients. Previous work by our lab has examined the molecular
            characteristics and pathways of bevacizumab in GBM treatment.
          </p>
          <p>
            In collaboration with Dr. Madhuri Wadehra, our labs have also found
            that epithelial membrane protein 2 (EMP2) is upregulated expression
            in GBM. We demonstrated that EMP2 expression increased following
            bevacizumab treatment, and this correlated with reduced survival
            time post-therapy. Currently, we are working on understanding the
            relationship between EMP2 and GBM.
          </p>
          <h2>Featured Publications</h2>
          
          <h3>2020</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://pubmed.ncbi.nlm.nih.gov/33063013/"
          >
            Increased epithelial membrane protein 2 expression in glioblastoma
            after treatment with bevacizumab
          </a>
          <h3>2018</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://pubmed.ncbi.nlm.nih.gov/28887715/"
          >
            Tissue microarray analysis for epithelial membrane protein-2 as a
            novel biomarker for gliomas
          </a>
          <h3>2017</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://pubmed.ncbi.nlm.nih.gov/28597184/"
          >
            Epithelial membrane protein-2 (EMP2) promotes angiogenesis in
            glioblastoma multiforme
          </a>
        </div>
      </div>
    );
  } else if (props.research === "Meningioma") {
    return (
      <div className="sscd">
        <div className="sscdwords">
          <h1>Meningioma</h1>
          <p>
            Meningiomas are tumors of the meninges, the membranes that surround
            and protect the brain and spinal cord. They are the most common type
            of primary brain tumor in adults, with most cases presenting as
            benign WHO Grade I. In contrast, high-grade meningiomas, which may
            be malignant, are less common and carry a higher likelihood of
            recurrence after resection. Although predominately benign, the high
            prevalence of this disease contributes to the growing medical
            burden. Furthermore, meningiomas can compress vessels and nerves and
            impinge on nearby brain tissue as they grow.
          </p>
          <p>
            Meningiomas are highly vascular in nature, with growth, recurrence
            rate, and morbidity closely linked with neoangiogenesis, the process
            of formation of new blood vessels supporting the tumor
            microenvironment. Angiogenic factors that contribute to these
            pathways may be effective targets for therapies aimed at preventing
            tumor progression or lowering risk of recurrence. Currently, the
            standard care of treatment of meningiomas primarily comprises
            surgical resection with or without radiotherapy for high-grade
            tumors, yet prognosis remains poor. For benign cases, treatment
            often involves surgery and watchful waiting, which can often present
            a health burden for patients.
          </p>
          <p>
            In close collaboration with Dr. Madhuri Wadehra’s lab at UCLA, we
            discovered increased mRNA expression of epithelial membrane protein
            2 (EMP2) in meningioma. As EMP2 has been previously shown to promote
            neoangiogenesis in glioblastoma (GBM), we believe it holds a similar
            function in meningioma. These findings may support EMP2 as a
            potential molecular marker for angiogenesis in meningioma.
            Currently, our lab is investigating whether EMP2 is established in
            human-derived meningioma cell lines with baselines similar to what
            we see in primary tumors.
          </p>
          <p>
            Most recently, our lab created a novel method of measuring
            hypervascularity through non-invasive neuroimaging to assess the
            benefit of preoperative embolization for intracranial meningiomas.
            Coined the Meningioma Vascularity Index (MVI), we present the MVI as
            a potential biomarker for meningiomas that may benefit from
            preoperative embolization.
          </p>
          <h2>Featured Publications</h2>
          <h3>2020</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://pubmed.ncbi.nlm.nih.gov/31981014/"
          >
            Identification of epithelial membrane protein 2 (EMP2) as a
            molecular marker and correlate for angiogenesis in meningioma
          </a>
          <h3>2018</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://pubmed.ncbi.nlm.nih.gov/29932383/"
          >
            The Meningioma Vascularity Index: a volumetric analysis of flow
            voids to predict intraoperative blood loss in nonembolized
            meningiomas
          </a>
          <h3>2017</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://pubmed.ncbi.nlm.nih.gov/28720310/"
          >
            Epithelial membrane protein 2: Molecular interactions and clinical
            implications
          </a>
        </div>
        <div className="sscdimages">
          <div className="box">
            <img src={mening1} alt="mening1" />
            <div className="overlay">
              <p>
                EMP2 mRNA expression is upregulated in meningioma speciments
                compared to regular meninges (A) and brain tissue samples (B).
                Immunohistochemistry straining with anti-EMP2 antibodies reveals
                an average of 95% positive staining among menigioma samples
                compared to regular brain speciments (C). Representative slides
                showing IHC staining with anti-EMP2 antibodies in meningeal and
                meningioma speciments (D). Parallel samples from a portion of
                the same tumor specimens were used for western blot analysis.
              </p>
              <p>
                Patel, K.S. et al. Identification of epithelial membrane protein
                2 as a molecular marker and correlate for angiogenesis in
                mengioma. Journal of neuro-oncology J47.I (2020) 15-24
              </p>
            </div>
          </div>
          <div className="box">
            <img src={mening2} alt="mening2" />
            <div className="overlay">
              <p>
                MVI Measured on axial T2-weighted MR images using the ITK-SNAP
                software.
              </p>
              <p>
                Lagman, Carlito et al. "The meningioma vascularity index: a
                volumetric analysis of flow voids to predict intraoperative
                blood loss in nonembolized meningiomas." Journal of neurosurgery
                J30.5 (2018): 1547-1552
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.research === "Vestibular Schwannomas") {
    return (
      <div className="sscd">
        <div className="sscdwords">
          <h1>Vestibular Schwannoma (Acoustic Neuroma)</h1>
          <p>
            Vestibular schwannomas (VS), historically known as acoustic
            neuromas, are benign neoplasms arising from Schwann cells
            surrounding the vestibular branch of cranial nerve (CN) VIII. An
            overgrowth of Schwann cells can lead to the impairment of CN VIII,
            CN VII (facial nerve), and CN V (trigeminal nerve) function. As a
            result, patients with VS may present with or develop a variety of
            symptoms including but not limited to tinnitus, disequilibrium,
            trigeminal neuropathy, vertigo, progressive hearing loss, and
            headache.
          </p>
          <p>
            Diagnosis of VS often follows a patient presenting with otological
            or neurological symptoms. Pure tone audiometry, digital subtraction
            angiography, otoscopy, CT scanning, and MRI imaging can be used to
            investigate the presence of a schwannoma.
          </p>
          <p>
            To date, treatment of VS is driven by mass effect prevention. For
            patients with fewer symptoms and smaller lesions, a conservative
            approach consists of watching waiting. For patients with severe
            symptoms or larger overgrown lesions, surgical resection is
            indicated. Radiotherapy may also be used as an adjuvant therapy in
            cases of subtotal resection or to minimize recurrence. VS can
            present as cystic or solid lesions, with the former growing more
            rapidly. For these patients, stereotactic radiosurgery may
            effectively control these tumors.
          </p>
          <p>
            Our lab focuses on understanding and exploring treatment and
            outcomes for VS patients. We evaluate different radiotherapy
            modalities, surgical approaches, and variability in neurologic
            preservation based on a multitude of treatment approaches. To date,
            our work has examined hearing preservation following radiotherapy
            and different surgical approaches, patient outcomes following
            planned subtotal resection and adjuvant radiotherapy, and the use of
            preoperative imaging to better preserve facial nerve function.
          </p>
          <h2>Featured Publications</h2>
          <h3>2021</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://pubmed.ncbi.nlm.nih.gov/34601356/"
          >
            Accuracy and outcomes of diffusion tensor imaging tractography in
            resection for vestibular schwannoma for facial nerve preservation
          </a>
          <h3>2020</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://journals.lww.com/neurosurgery/Abstract/2020/03000/Postoperative_Hearing_Preservation_in_Patients.3.aspx"
          >
            Postoperative Hearing Preservation in Patients Undergoing
            Retrosigmoid Craniotomy for Resection of Vestibular Schwannomas: A
            Systematic Review of 2034 Patients
          </a>
          <h3>2019</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://link.springer.com/article/10.1007/s00701-019-03940-2"
          >
            Radiosurgery treatment is associated with improved facial nerve
            preservation versus repeat resection in recurrent vestibular
            schwannomas
          </a>
        </div>
        <div className="sscdimages">
          <div className="box">
            <img src={vs1} alt="vs1" />
            <div className="overlay">
              <p>
                Ung, N. et al. Accuracy and outcomes of diffusion sensor imaging
                tractography in resection for vestibular schwannomma for facial
                nerve preservation. Journal of the neurological sciences. 430
                (2021) 120006
              </p>
            </div>
          </div>
          <div className="box">
            <img src={vs2} alt="vs2" />
            <div className="overlay">
              <p>
                MVI Measured on axial T2-weighted MR images using the ITK-SNAP
                software.
              </p>
              <p>
                Sheppard, J. et al. Neurological ectopia of the vestibular nerve
                masquerading as a vestibular schwannomma: a case report.
                neuropathology 38.4 (2018): 438-442
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Research;
