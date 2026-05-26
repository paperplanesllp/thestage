import { useEffect } from "react";

const ArchivesDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className=" mx-auto px-15 flex justify-center items-center flex-col mb-15 py-24 bg-[#f6f4ef] text-gray-900 font-serif" style={{ fontFamily: "Gordita, sans-serif" }}>

      {/* ===== TITLE ===== */}
      <h1 className="text-center mt-12 text-4xl md:text-5xl leading-tight mb-4">
        Honoring The Beauty Within:
        <br />
        <em className="font-light">The Practice of Becoming Ourselves</em>
      </h1>

      {/* ===== SUBTITLE ===== */}
      <p className="text-center text-sm tracking-wide uppercase text-gray-600 mt-8 mb-20 max-w-xl mx-auto leading-normal">
        Merigold Exists To Claim A Space <br />
        To Bridge Our Inward Beauty To <br />
        Our Outward Beauty
      </p>

      {/* ===== GRID ===== */}
      <div className="grid grid-cols-1  md:grid-cols-6  gap-16 ">
<div></div>
       
        {/* ===== CENTER TEXT ===== */}
        <div className="text-sm leading-4.5 col-span-2 text-black space-y-6 font-light" style={{fontFamily: "Wittgenstein, serif"}}> 
          <p>
            Normal human adults represent our paradigm case of responsible agents. What is distinctive about them, that we accord them this status? Thinking of retrospective responsibility in particular, why can be held accountable for their actions – justly praised or blamed, deservedly punished or rewarded? The philosophical literature has explored three broad approaches to moral agency:

Human beings have free will, that is, distinctive causal powers or a special metaphysical status, that separate them from everything else in the universe;
Human beings can act on the basis of reason(s);
Human beings have a certain set of moral or proto-moral feelings.
The first approach, although historically important, has largely been discredited by the success of modern science. Science provides, or promises, naturalistic explanations of such phenomena as the evolution of the human species and the workings of the brain. Almost all modern philosophers approach responsibility as compatibilists – that is, they assume that moral responsibility must be compatible with causal or naturalistic explanation of human thought and action, and therefore reject the metaphysical idea of free will. 
          </p>

          <p>
            (An important note: There can be terminological confusion here. Some contemporary philosophers will use the term “free will” to describe our everyday freedom of choice, claiming that free will, properly understood, is compatible with the world’s causal order.)

Among modern compatibilists, a contest remains, however, between the second and third approaches – positions that are essentially Kantian and Humean in inspiration. Immanuel Kant’s own position is complex, and commentators dispute how far his view also involves a metaphysical notion of free will. It is indisputable, however, that our rationality is at the centre of his picture of moral agency. Kant himself does not speak of responsibility – the word was only just coming into the language of his day – but he does have much to say about imputation (Zurechnung), that is, the basis on which actions are imputed to a person. Kant was principally concerned with evaluation of the self. Although he
          </p>

          
        </div>

        <div className="text-sm col-span-2 leading-4.5 text-black space-y-6 font-light"style={{fontFamily: "Wittgenstein, serif"}}>
           <p>
            . A Humean analysis of responsibility will investigate how these emotions lead us to be responsive to one another, in ways that support moral conduct and provide social penalties for immoral conduct. That is, its emphasis is less on people’s evaluation of themselves and more on how people judge and influence one another. Russell (1995) carefully develops Hume’s own account. In twentieth century philosophy, broadly Humean approaches were given a new lease of life by Peter Strawson’s “Freedom and Resentment” (1962). This classic essay underlined the role of “reactive sentiments” or “reactive attitudes” – that is, emotional responses such as resentment or shame – in practices of responsibility.

The basic criticisms that each position makes of the other are simple. Kantians are vulnerable to the charge that they do not give a proper account of the role of feeling and emotion in the moral life. They can also be accused of reifying our capacity for reason in a way that makes mysterious how human beings’ capacities for reason and morality might have evolved. Humeans are vulnerable to the charge that they cannot give any account of the validity of reasoning beyond the boundaries of what we might feel inclined to endorse or reject: 
          </p>

          <p>
            Can the Humean really hold that moral reasoning has any validity for people who do not feel concern for others? Contemporary philosophers have developed both positions so as to take account of such criticisms, which has led to rather technical debates about the nature of reason (for instance, Bernard Williams’ (1981) well-known distinction between internal and external reasons) and normativity (what it is for something to provide a reason to act or think in a certain way, for example, Korsgaard, 1996). So far as responsibility is concerned, Wallace (1994) is a well-regarded attempt to mediate between the two approaches. Rather differently, Pettit (2001) uses our susceptibility to reasons as the basis for an essentially interactive account of moral agency.
          </p>
        </div>

       <div></div>
      
      </div>
    </section>
  );
};

export default ArchivesDetail;
