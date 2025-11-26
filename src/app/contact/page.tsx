import Container from "@/app/_components/container";
import Header from "@/app/_components/header";

export default function Contact() {
  return (
    <main>
      <Container>
        <Header />
        
        {/* 限制内容最大宽度，让排版更紧凑 */}
        <div className="max-w-5xl mx-auto mb-32">
          
          {/* 1. 顶部标题区域：居中显示，增加副标题 */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Here's how you can reach our team.
            </p>
          </div>

          {/* 2. 核心内容区域：在大屏幕上使用双栏布局 (Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* 左栏：主要的联系方式卡片 */}
            <div className="space-y-6">
              
              {/* 邮箱卡片：使用圆角、边框和轻微背景色 */}
              <div className="p-8 rounded-2xl border border-neutral-200 bg-neutral-50 dark:bg-slate-800 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-2xl font-bold mb-2">Email Support</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  For technical issues, detailed feedback, or partnership inquiries.
                </p>
                <a 
                  href="mailto:support@translatech.com" 
                  className="inline-block bg-black text-white dark:bg-white dark:text-black font-bold py-3 px-6 rounded-lg hover:opacity-80 transition-opacity"
                >
                  support@translatech.com
                </a>
              </div>

              {/* 社交媒体卡片 */}
              <div className="p-8 rounded-2xl border border-neutral-200 dark:border-slate-700">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-2xl font-bold mb-2">Social Media</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Follow us for the latest updates and behind-the-scenes.
                </p>
                <div className="flex flex-wrap gap-4 text-lg font-bold text-blue-600 dark:text-blue-400">
                   <a href="#" className="hover:underline">Twitter</a>
                   <span className="text-gray-300">/</span>
                   <a href="#" className="hover:underline">LinkedIn</a>
                   <span className="text-gray-300">/</span>
                   <a href="#" className="hover:underline">GitHub</a>
                </div>
              </div>
            </div>

            {/* 右栏：常见问题与工作时间 */}
            <div className="space-y-8 py-4">
               
               {/* 常见问题区 */}
               <div>
                  <h3 className="text-2xl font-bold mb-6 border-b pb-2">FAQ</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg mb-1">How long does it take to get a response?</h4>
                      <p className="text-gray-600 dark:text-gray-400">We aim to respond to all inquiries within 24-48 hours during business days.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Where are you located?</h4>
                      <p className="text-gray-600 dark:text-gray-400">We are a remote-first team with HQ based in Singapore.</p>
                    </div>
                  </div>
               </div>

               {/* 办公时间 */}
               <div className="bg-blue-50 dark:bg-slate-900 p-6 rounded-xl border border-blue-100 dark:border-slate-800">
                 <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-300">Office Hours</h3>
                 <p className="text-blue-800 dark:text-blue-400">
                   Monday - Friday<br/>
                   9:00 AM - 6:00 PM (GMT+8)
                 </p>
               </div>

            </div>

          </div>
        </div>
      </Container>
    </main>
  );
}
