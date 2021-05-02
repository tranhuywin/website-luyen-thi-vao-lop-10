const FilterExam = () => {

    function handleSubmit() {

    }
    return (
        <div>
            <form className='mx-auto' onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="form-inline">
                        <label className='my-1 mr-2' htmlFor="selectExamPlace">Nơi ra đề</label>
                        <select className=" my-1 mr-sm-2 form-control"
                            id="selectExamPlace">
                            <option selected value='Bộ Giáo Dục'>Tất cả</option>
                            <option value='Bộ Giáo Dục'>Bộ Giáo Dục</option>
                            <option defaultValue value='THCS Kim Long'>THCS Kim Long</option>
                            <option value='THPT Trần Phú'>THPT Trần Phú</option>
                            <option value='THPT Nguyễn Trãi'>THPT Nguyễn Trãi</option>
                        </select>
                        <label className="my-1 mr-2" htmlFor="selectExamFormat">Dạng đề</label>
                        <select className="custom-select my-1 mr-sm-2"
                            id="selectExamFormat">
                            <option selected>Tất cả</option>
                            <option value="thi thật">Thi thật</option>
                            <option value="thi thử">Thi thử</option>
                        </select>
                        <label className="my-1 mr-2" htmlFor="selectExamTime">Thời gian</label>
                        <select className="custom-select my-1 mr-sm-2"
                            id="selectExamTime">
                            <option selected>Tất cả</option>
                            <option value="15p">15p</option>
                            <option value="30p">30p</option>
                            <option defaultValue value="45p">45p</option>
                            <option value="90p">90p</option>
                            <option value="120p">120p</option>
                        </select>

                        <label className='my-1 mr-2' htmlFor="selectSubjects">Môn</label>
                        <select className="form-control"
                            id="selectSubjects">
                            <option selected>Tất cả</option>
                            <option defaultValue>Toán</option>
                            <option>Ngữ văn</option>
                            <option>Anh văn</option>
                        </select>

                        <label className="ml-1 mr-2" htmlFor="selectTimesExam">Lần ra đề</label>
                        <select className="custom-select my-1 mr-sm-2"
                            id="selectTimesExam">
                            <option selected>Tất cả</option>
                            <option defaultValue value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="form-inline mt-2">
                        <label className="ml-1 mr-2" htmlFor="selectSchoolYear">Năm học</label>
                        <select className="custom-select my-1 mr-sm-2"
                            id="selectSchoolYear">
                            <option selected>Tất cả</option>
                            <option defaultValue >2020-2021</option>
                            <option value="2019-2020">2019-2020</option>
                            <option value="2018-2019">2018-2019</option>
                            <option value="2017-2018">2017-2018</option>
                        </select>
                        <button type="submit" className="btn-one" ><i className="bi bi-search"></i> Lọc</button>
                    </div>

                </div>

            </form>

        </div>
    )
}

export default FilterExam
