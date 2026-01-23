import React, { useLayoutEffect, useState } from 'react';
import img from '../../assets/Contact_banner.PNG'
import { useLocation, useParams } from 'react-router-dom';
export default function MembershipForm() {

    const {group}=useParams()
    const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    const groupLabels = {
  one: "Group One",
  two: "Group Two",
  three: "Students Group",
};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    city: '',
    ageConfirm: '',
    participationType: '',
    bookTypes: [],
    authors: '',
    whyJoin: '',
    missingInConversations: '',
    spokenPublicly: '',
    engagementTopics: '',
    workLink: '',
    comfortableWithPace: '',
    attentiveEngagement: '',
    curatedUnderstanding: '',
    finalReflection: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMultiSelect = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handlePillSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const PillOption = ({ field, value, label, isMulti = false }) => {
    const isSelected = isMulti 
      ? formData[field].includes(value)
      : formData[field] === value;

    return (
      <button
        type="button"
        onClick={() => isMulti ? handleMultiSelect(field, value) : handlePillSelect(field, value)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          isSelected
            ? 'bg-black text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {label}
      </button>
    );
  };

  return (

    
    <div className="min-h-screen bg-center bg-white "
     >
     
      <div
  className="w-full translate-y-15 h-[35vh] bg-position-[50%_43%] bg-cover "
  style={{
    backgroundImage: `url(${img})`
  }}
/>
    
     
      <div className="max-w-7xl mx-auto pb-10 mt-30" style={{ fontFamily: "Gordita, sans-serif" }}>
        <div className="mb-12">
          <h1 className="text-4xl font-light mb-4">Community for Readers & Conversation</h1>
          <p className="text-lg text-gray-600 mb-2">A Curated Reading and Conversation Space</p>
          <p className="text-sm text-gray-500 leading-relaxed">
            This is a curated community centred on depth, attentive listening, and serious conversation. 
            Participation is considered carefully, and not all responses may be accommodated immediately.
          </p>
        </div>

        <form className="space-y-12">
          
          {/* Question 1 */}
          <div className="grid md:grid-cols-[0.8fr_1.5fr] gap-16 items-center justify-start">
           
            <div className="text-gray-700">
              1. Name
            </div>
            <div className="max-w-md">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full border-b border-gray-300 focus:border-black outline-none pb-2 transition-colors"
              />
            </div>
          </div>

          {/* Question 2 */}
          <div className="grid md:grid-cols-[0.8fr_1.5fr] gap-16 items-center justify-start">
            <div className="text-gray-700">
              2. Email
            </div>
            <div className="max-w-md">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full border-b border-gray-300 focus:border-black outline-none pb-2 transition-colors"
              />
            </div>
          </div>

           <div className="grid md:grid-cols-[0.8fr_1.5fr] gap-16 items-center justify-start">
            <div className="text-gray-700">
              3. Phone
            </div>
            <div className="max-w-md">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full border-b border-gray-300 focus:border-black outline-none pb-2 transition-colors"
              />
            </div>
          </div>



          {/* Question 3 */}
          <div className="grid md:grid-cols-[0.8fr_1.5fr] gap-16 items-center justify-start">
            <div className="text-gray-700">
              4. City
            </div>
            <div className="max-w-md">
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="w-full border-b border-gray-300 focus:border-black outline-none pb-2 transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-[0.8fr_1.5fr] gap-16 items-center justify-start">
            <div className="text-gray-700">
              5. Group Membership
            </div>
            <div className="max-w-md">
              <input
                type="text"
value={groupLabels[group] || ""}                readOnly
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="w-full border-b border-gray-300 focus:border-black outline-none pb-2 transition-colors"
              />
            </div>
          </div>

          {/* Question 4 */}
          <div className="grid md:grid-cols-[0.8fr_1.5fr] gap-16 items-center justify-start">
            <div className="text-gray-700">
              6. Are you above 18 years of age?
            </div>
            <div className="flex gap-3 max-w-md">
              <PillOption field="ageConfirm" value="yes" label="Yes" />
              <PillOption field="ageConfirm" value="no" label="No" />
            </div>
          </div>

          {/* Question 5 */}
          <div className="grid md:grid-cols-[0.8fr_1.5fr] gap-16 items-start justify-start">
            <div className="text-gray-700">
              7. How would you like to participate in this community?
            </div>
            <div className="flex flex-wrap gap-3 max-w-md">
              <PillOption 
                field="participationType" 
                value="reader" 
                label="Primarily as a reader / listener" 
              />
              <PillOption 
                field="participationType" 
                value="reader-speaker" 
                label="As a reader who also wishes to speak or present occasionally" 
              />
              <PillOption 
                field="participationType" 
                value="speaker" 
                label="Primarily as a speaker / presenter" 
              />
              <PillOption 
                field="participationType" 
                value="exploring" 
                label="I am exploring and would like to begin as a listener" 
              />
            </div>
          </div>

          {/* Question 6 - Multi-select */}
          <div className="grid md:grid-cols-[0.8fr_1.5fr] gap-16 items-start justify-start">
            <div className="text-gray-700">
              8. What kinds of books or texts do you mostly engage with?
            </div>
            <div className="flex flex-wrap gap-3 max-w-md">
              <PillOption field="bookTypes" value="philosophy" label="Philosophy" isMulti />
              <PillOption field="bookTypes" value="theology" label="Theology / Religion" isMulti />
               <PillOption field="bookTypes" value="science" label="Science" isMulti />
               <PillOption field="bookTypes" value="non-fiction" label="Non-Fiction " isMulti />
              <PillOption field="bookTypes" value="fiction" label="Fiction " isMulti />
              <PillOption field="bookTypes" value="social-political" label="Social & Political Thought" isMulti />
              <PillOption field="bookTypes" value="history" label="History" isMulti />
              <PillOption field="bookTypes" value="essays" label="Essays / Long-form writing" isMulti />
            </div>
          </div>

          {/* Question 7 */}
          <div className="grid md:grid-cols-[0.8fr_1.5fr] gap-16 items-start justify-start">
            <div className="text-gray-700">
              9. Name 1–3 authors, thinkers, or books that have shaped your thinking
            </div>
            <div className="max-w-md">
              <textarea
                value={formData.authors}
                onChange={(e) => handleInputChange('authors', e.target.value)}
                rows={3}
                className="w-full border-b border-gray-300 focus:border-black outline-none pb-2 transition-colors resize-none"
              />
            </div>
          </div>

          {/* Question 8 */}
          <div className="grid md:grid-cols-[0.8fr_1.5fr] gap-16 items-start justify-start">
            <div className="text-gray-700">
              10. Why do you wish to be part of this reading and conversation community?
            </div>
            <div className="max-w-md">
              <textarea
                value={formData.whyJoin}
                onChange={(e) => handleInputChange('whyJoin', e.target.value)}
                rows={3}
                className="w-full border-b border-gray-300 focus:border-black outline-none pb-2 transition-colors resize-none"
              />
            </div>
          </div>

          {/* Question 9 */}
          <div className="grid md:grid-cols-[0.8fr_1.5fr] gap-16 items-start justify-start">
            <div className="text-gray-700">
              11. In your view, what is often missing in contemporary public conversations? <span className="text-gray-400">(Optional)</span>
            </div>
            <div className="max-w-md">
              <textarea
                value={formData.missingInConversations}
                onChange={(e) => handleInputChange('missingInConversations', e.target.value)}
                rows={3}
                className="w-full border-b border-gray-300 focus:border-black outline-none pb-2 transition-colors resize-none"
              />
            </div>
          </div>

          {/* Question 10 */}
          <div className="grid md:grid-cols-[0.8fr_1.5fr] gap-16 items-start justify-start">
            <div className="text-gray-700">
              12. Have you spoken publicly before, in any setting?
            </div>
            <div className="flex flex-wrap gap-3 max-w-md">
              <PillOption 
                field="spokenPublicly" 
                value="yes" 
                label="Yes (talks, lectures, classrooms, podcasts, discussions)" 
              />
              <PillOption 
                field="spokenPublicly" 
                value="interested" 
                label="No, but I am interested in beginning" 
              />
              <PillOption 
                field="spokenPublicly" 
                value="listener" 
                label="No, and I prefer to remain a listener" 
              />
            </div>
          </div>

          {/* Question 11 */}
          <div className="grid md:grid-cols-[0.8fr_1.5fr] gap-16 items-start justify-start">
            <div className="text-gray-700">
              13. If you speak or wish to speak, what kinds of ideas, texts, or questions do you hope to engage with? <span className="text-gray-400">(Optional)</span>
            </div>
            <div className="max-w-md">
              <textarea
                value={formData.engagementTopics}
                onChange={(e) => handleInputChange('engagementTopics', e.target.value)}
                rows={3}
                className="w-full border-b border-gray-300 focus:border-black outline-none pb-2 transition-colors resize-none"
              />
            </div>
          </div>

          {/* Question 12 */}
          <div className="grid md:grid-cols-[0.8fr_1.5fr] gap-16 items-center justify-start">
            <div className="text-gray-700">
              14. If available, you may share a link to any talk, writing, or work <span className="text-gray-400">(Optional)</span>
            </div>
            <div className="max-w-md">
              <input
                type="url"
                value={formData.workLink}
                onChange={(e) => handleInputChange('workLink', e.target.value)}
                className="w-full border-b border-gray-300 focus:border-black outline-none pb-2 transition-colors"
              />
            </div>
          </div>

          {/* Question 13 */}
          <div className="grid md:grid-cols-[0.8fr_1.5fr] gap-16 items-start justify-start">
            <div className="text-gray-700">
              15. This is a slow-growing, and depth-oriented community. Are you comfortable with that pace and scale?
            </div>
            <div className="flex gap-3 max-w-md">
              <PillOption field="comfortableWithPace" value="yes" label="Yes" />
              <PillOption field="comfortableWithPace" value="open" label="I am open to it" />
              <PillOption field="comfortableWithPace" value="no" label="No" />
            </div>
          </div>

          {/* Question 14 */}
          <div className="grid md:grid-cols-[0.8fr_1.5fr] gap-16 items-start justify-start">
            <div className="text-gray-700">
              16. Are you open to reading attentively, listening carefully, and engaging respectfully—even in disagreement?
            </div>
            <div className="flex gap-3 max-w-md">
              <PillOption field="attentiveEngagement" value="yes" label="Yes" />
              <PillOption field="attentiveEngagement" value="no" label="No" />
            </div>
          </div>

          {/* Question 15 */}
          <div className="grid md:grid-cols-[0.8fr_1.5fr] gap-16 items-start justify-start">
            <div className="text-gray-700">
              17. This community is curated. In order to preserve its quality and seriousness, the curator may intervene or set boundaries in cases of disruptive or inappropriate conduct. Are you comfortable with this understanding?
            </div>
            <div className="flex gap-3 max-w-md">
              <PillOption field="curatedUnderstanding" value="yes" label="Yes" />
              <PillOption field="curatedUnderstanding" value="no" label="No" />
            </div>
          </div>

          {/* Question 16 */}
          <div className="grid md:grid-cols-[0.8fr_1.5fr] gap-16 items-start justify-start">
            <div className="text-gray-700">
              18. Any final reflection you would like to share? <span className="text-gray-400">(Optional)</span>
            </div>
            <div className="max-w-md">
              <textarea
                value={formData.finalReflection}
                onChange={(e) => handleInputChange('finalReflection', e.target.value)}
                rows={3}
                className="w-full border-b border-gray-300 focus:border-black outline-none pb-2 transition-colors resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}