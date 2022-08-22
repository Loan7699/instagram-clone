import { BsGearWide, BsBookmark, BsCardList, BsGrid3X3 } from 'react-icons/bs'
import { MdOutlinePhotoCameraFront, MdOutlineGridOn } from 'react-icons/md'
import { BiMerge } from 'react-icons/bi'

function MyProfile() {
    return (
        <div className="mt-16 bg-[#FAFAFA] md:px-5 md:pt-7 max-width mx-auto">
            <div className="flex mx-4 pt-6 mb-6">
                <div className="mr-7 basis-0 grow">
                    <div className='w-20 h-20 md:w-36 md:h-36 mx-auto'>
                        <img className="rounded-full border border-solid border-#DBDBDB" src="../my_profile/Loan.jpg" />
                    </div>
                </div>

                <div className='flex-profile'>
                    <div className='md:flex md:mb-2'>
                        <div className='flex'>
                            <p className='text-[28px] font-extralight'>phuongloan99</p>
                            <div className="ml-1.5 px-2 pt-3 text-lg">
                                <BsGearWide className='md:hidden' />
                            </div>
                        </div>

                        <div className="mt-3 pb-[2px] px-[9px] rounded-md border border-solid border-#DBDBDB w-60 md:h-8 md:mt-2 md:w-24">
                            <a href="" className='text-sm font-semibold'>
                                Edit profile
                            </a>
                        </div>

                        <div className="ml-1.5 px-2 pt-3 text-lg">
                            <BsGearWide className='hidden md:block' />
                        </div>

                    </div>

                    <ul className='py-3 hidden md:flex md:justify-start md:mb-2'>
                        <li className='mr-10'>
                            <div className='flex text-base'>
                                <span className='font-semibold mr-2'>24</span>
                                <span className=''>posts</span>
                            </div>
                        </li>
                        <li className='mr-10'>
                            <div className='flex'>
                                <span className='font-semibold mr-2'>104</span>
                                <span className=''>followers</span>
                            </div>
                        </li>
                        <li className='mr-10'>
                            <div className='flex'>
                                <span className='font-semibold mr-2'>382</span>
                                <span className=''>following</span>
                            </div>
                        </li>
                    </ul>

                    <div className="pb-[21px] text-left hidden md:block">
                        <span className='font-bold text-base'>Phương Loan</span>
                    </div>
                </div>
            </div>


            <div className="px-4 pb-[21px] text-left md:hidden">
                <span className='text-sm font-bold'>Phương Loan</span>
            </div>
            <ul className='py-3 flex justify-around border-y border-solid border-[#DBDBDB] md:hidden'>
                <li>
                    <div className='flex flex-col'>
                        <span className='text-sm font-semibold'>24</span>
                        <span className='text-[#828282] text-sm'>posts</span>
                    </div>
                </li>
                <li>
                    <div className='flex flex-col'>
                        <span className='text-sm font-semibold'>104</span>
                        <span className='text-[#828282] text-sm'>followers</span>
                    </div>
                </li>
                <li>
                    <div className='flex flex-col'>
                        <span className='text-sm font-semibold'>382</span>
                        <span className='text-[#828282] text-sm'>following</span>
                    </div>
                </li>
            </ul>
            <div className='flex justify-around md:justify-center h-14 items-center md:border-t md:border-solid md:border-[#DBDBDB]'>
                <div className='h-14 md:border-t-2 md:border-solid md:border-[#333333] mr-16'>
                    <a href="" className='flex pt-4'>
                        <BsGrid3X3 className='w-5 h-5 md:w-3 md:h-3 mt-[2px] text-[#0095F6]' />
                        <div className='uppercase hidden md:block text-[#333333] ml-1.5 text-xs font-semibold'>Posts</div>
                    </a>
                </div>
                {/* <a href=''>
                    <BsCardList className='w-5 h-5' />
                </a> */}

                <a href="" className='flex mr-16'>
                    <BsBookmark className='w-5 h-5 md:w-3 md:h-3 mt-[2px]' />
                    <div className='uppercase hidden md:block text-[#8E8E8E] ml-1.5 text-xs font-semibold'>saved</div>
                </a>


                <a href="" className='flex'>
                    <MdOutlinePhotoCameraFront className='w-6 h-6 md:w-3 md:h-3 mt-[2px]' />
                    <div className='uppercase hidden md:block text-[#8E8E8E] ml-1.5 text-xs font-semibold'>tagged</div>
                </a>


            </div>
            <div className='flex flex-col'>
                <div className='flex md:mb-7 mb-1'>
                    <div classname="w-full shrink-0 grow basis-0">
                        {/*  flex-grow cho phép các phần tử giãn theo độ rộng của container. */}
                        <a href='' className='cursor-pointer'>
                            <div className='mr-[3px] md:mr-7 overflow-hidden'>
                                {/* width, height: 33vw */}
                                <img src='/my_profile/post1.jpg' className='object-cover w-full h-full' />
                            </div>
                        </a>
                    </div>
                    <div classname="w-full shrink-0 grow basis-0">
                        <a href='' className='relative cursor-pointer'>
                            <div className='mr-[3px] md:mr-7 overflow-hidden'>
                                <img src='/my_profile/post2.jpg' className='object-cover w-full h-full' />
                            </div>
                            <BiMerge className='text-[#FFFFFF] relative top-[-275px] right-[-250px] text-2xl' />
                        </a>
                    </div>
                    <div classname="w-full shrink-0 grow basis-0">
                        <a href='' className='cursor-pointer'>
                            <div className='overflow-hidden'>
                                <img src='/my_profile/post3.jpg' className='object-cover w-full h-full' />
                            </div>
                        </a>
                    </div>
                </div>

                {/* chưa căm được ảnh */}
                <div className='flex'>
                    <div classname="">
                        <a href=''>
                            <div className='md:mr-7 mr-[3px]'>
                                <img src='/my_profile/post4.jpg' className='object-cover' />
                            </div>
                            <BiMerge className='text-[#FFFFFF] relative top-2 right-2' />
                        </a>
                    </div>
                    <div classname="">
                        <a href=''>
                            <div className='mr-[3px] md:mr-7'>
                                <img src='/my_profile/post5.jpg' className='object-cover' />
                            </div>
                        </a>
                    </div>
                    <div relative>
                        <a href=''>
                            <div>
                                <img src='/my_profile/post6.jpg' className='object-cover' />
                            </div>
                            <BiMerge className='text-[#FFFFFF] relative top-2 right-2' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;

// các ảnh chưa cho bằng nhau chiều ngang và dọc