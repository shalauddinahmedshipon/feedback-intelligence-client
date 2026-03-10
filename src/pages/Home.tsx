import { CreateFeedbackModal } from "@/components/module/feedback/create-feedback-modal"
import { FeedbackStats } from "@/components/module/feedback/feedback-stats"
import { FeedbackTable } from "@/components/module/feedback/feedback-table"
import SettingsModal from "@/components/module/settings/SettingsModal"

const Home = () => {
  return (
    <div>
      {/* feedback states  */}
      <FeedbackStats />

      {/* create feedback and settings team email button  */}
      <div className="my-6 flex justify-end gap-4">
        <CreateFeedbackModal />
        <SettingsModal />
      </div>

      {/* feedback searchbar, filtering dropdown and table  */}
      <FeedbackTable />
    </div>
  )
}

export default Home
