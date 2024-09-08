
export const Appbar = ({username}) => {
  return <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">
          AuraPay
      </div>
      <div className="flex">
          <div className="flex justify-center mt-3">
              Hello 
          </div>
          <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center mb-3 mx-5 text-2xl font-bold">
                  {username}
              </div>
          </div>
      </div>
  </div>
}