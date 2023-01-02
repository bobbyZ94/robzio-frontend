<body className="bg-black text-gray-50 scrollbar-track-black scrollbar-thumb-zinc-900 scrollbar-corner-black scrollbar">
        <div>
          <Header />
        </div>

        <div className="h-screen overflow-scroll snap-y snap-mandatory snap-always scrollbar-none">
          <div className="h-screen snap-center">Child1</div>
          <div className="h-screen snap-center">Child2</div>
        </div>

        <div>
          {/* @ts-expect-error Server Component */}
          <Footer />
        </div>
      </body>



<div className="h-screen overflow-scroll snap-y snap-mandatory snap-always scrollbar-none">
          <div className="h-screen snap-center">Child1</div>
          <div className="h-screen snap-center">Child2</div>
        </div>