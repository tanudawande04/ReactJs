//first react interview questions.....

export const Practice = () => {

    const student = [2, 4];
    return (
        <>
            {/* first method */}
            {/* <h1>{student.length === 0 && "Student not found"}</h1> */}

            {/* second method */}
            <h1>{!student.length && "student not found"}</h1>


            <p>Number of student : {student.length}</p>
        </>

    )

}