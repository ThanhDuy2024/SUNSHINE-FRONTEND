/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
export default function AdminCategorySearchFilter(props: any) {
  const { statusCallBack, searchCallBack } = props;
  const handleChange = (e: any) => {
    statusCallBack(e.target.value);
  }

  const handleSearch = (e: any) => {
    searchCallBack(e.target.value);
  }
  return (
    <>
      <div className="">
        <div className="block justify-between items-center lg:flex">
          {/* search */}
          <label className="
                  input 
                  rounded-2xl 
                  outline-none"
          >
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required placeholder="Search"
              onChange={handleSearch}
            />
          </label>

          {/* filter */}
          <div className="flex gap-2.5 mt-3.75 lg:mt-0">
            <select defaultValue="Pick a color" className="select rounded-2xl outline-0 lg:w-50" onChange={handleChange}>
              <option disabled={true}>Lọc trạng thái</option>
              <option value={""}>Tất cả trạng thái</option>
              <option value={"active"}>Hoạt động</option>
              <option value={"inactive"}>Ngừng hoạt động</option>
            </select>

            <select defaultValue="Pick a color" className="select rounded-2xl outline-0 lg:w-50">
              <option disabled={true}>Lọc theo người tạo</option>
              <option>Tất cả người tạo</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}