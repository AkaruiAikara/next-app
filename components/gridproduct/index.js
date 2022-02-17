import Link from 'next/link';

export default function GridProduct() {
    return (
        <div className="lg:mx-20">
            <h2 className="text-4xl font-black text-blood mt-16 mb-12">Lets Order</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <Link href="/detail">
                    <div className="bg-pinky rounded-xl cursor-pointer">
                        <img className="w-full" src="/assets/img/list-1.png" alt="list1" />
                        <div className="text-blood p-4">
                            <h3 className="text-2xl font-bold font-noto">Ice Coffee Palm Sugar</h3>
                            <span className="text-lg font-thin">Rp. 27.000</span>
                        </div>
                    </div>
                </Link>
                <div className="bg-pinky rounded-xl">
                    <img className="w-full" src="/assets/img/list-2.png" alt="list2" />
                    <div className="text-blood p-4">
                        <h3 className="text-2xl font-bold font-noto">Ice Coffee Green Tea</h3>
                        <span className="text-lg font-thin">Rp. 31.000</span>
                    </div>
                </div>
                <div className="bg-pinky rounded-xl">
                    <img className="w-full" src="/assets/img/list-3.png" alt="list3" />
                    <div className="text-blood p-4">
                        <h3 className="text-2xl font-bold font-noto">Hanami Latte</h3>
                        <span className="text-lg font-thin">Rp. 29.000</span>
                    </div>
                </div>
                <div className="bg-pinky rounded-xl">
                    <img className="w-full" src="/assets/img/list-4.png" alt="list4" />
                    <div className="text-blood p-4">
                        <h3 className="text-2xl font-bold font-noto">Clepon Coffee</h3>
                        <span className="text-lg font-thin">Rp. 28.000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}