'use client';

import { OrderHistroy } from '@/components/userInfo/OrderHistory';
import { UserInfoCom } from '@/components/userInfo/UserInfo';
import { useState } from 'react';

export default function UserInfo() {
  const [activeTab, setActiveTab] = useState<'info' | 'history'>('info');

  return (
    <div className="w-screen bg-[#f7f7f7]">
      <div className="border max-w-screen-lg h-fit m-auto p-7">
        <div className="flex gap-5">
          <div className="flex-2  w-[244px] h-fit space-y-1 ">
            <div
              className={`{w-full ${activeTab === 'info' ? 'bg-white rounded-2xl' : ''}  `}
            >
              <button
                onClick={() => {
                  setActiveTab('info');
                }}
                className="  py-2 pl-4"
              >
                Хэрэглэгчийн хэсэг
              </button>
            </div>

            <div
              className={`{w-full ${activeTab === 'history' ? 'bg-white rounded-2xl' : ''}  `}
            >
              <button
                onClick={() => {
                  setActiveTab('history');
                }}
                className="  py-2 pl-4"
              >
                Захиалгын түүх
              </button>
            </div>
          </div>
          <div className="flex-1">
            {activeTab === 'info' && <UserInfoCom />}
            {activeTab === 'history' && <OrderHistroy />}
          </div>
        </div>
      </div>
    </div>
  );
}
