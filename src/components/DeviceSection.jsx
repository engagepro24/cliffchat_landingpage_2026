export default function DevicesSection() {
    return (
        <section className="bg-[#f5f6f7] py-28 px-6">
            <div className="max-w-6xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                    Beautiful on Every Device
                </h2>

                {/* Subheading */}
                <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
                    A sleek, responsive interface that works perfectly in any browser.
                </p>

                {/* Main Rounded Container */}
                <div className="mt-20 bg-white/60 rounded-3xl p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-sm">

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1587614382346-4ec7d08a29f5?q=80&w=1200"
                                alt="Chat Interface"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b1?q=80&w=1200"
                                alt="Group Chat"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200"
                                alt="Video Call"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
                                alt="Settings Panel"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
