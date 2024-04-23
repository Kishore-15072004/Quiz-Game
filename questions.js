let questions=[
    {
        numb:1,
        question: " Which of the below is valid way to instantiate an array in java?",
        answer:"A. int myArray [] = {1, 3, 5};",
        options:[
            "A. int myArray [] = {1, 3, 5};",
            "B. int myArray [] [] = {1,2,3,4};",
            "C. int [] myArray = (5, 4, 3);",
            "D. int [] myArray = {“1”, “2”, “3”};"
        ]
    },
    {
        numb:2,
        question: " Which of the below are reserved keyword in Java?",
        answer:"B. goto",
        options:[
            "A. array",
            "B. goto",
            "C. null",
            "D. elseif"
        ]
    },
    {
        numb:3,
        question:" What are the valid statements for static keyword in Java?",
        answer:"C. We can have static method implementations in interface",
        options:[
            "A. We can't have static block in a class",
            "B. The static block in a class is executed every time an object of class is created",
            "C. We can have static method implementations in interface",
            "D. We can define static block inside a method"
        ]
    },
    {
        numb:4,
        question: " Method overloading comes under which concept of OOPS",
        answer:"D. Polymorphism",
        options:[
            "A. Abstraction",
            "B. Generics",
            "C. Inheritance",
            "D. Polymorphism"
        ]
    },
    {
        numb:5,
        question: " Which of the following statements are true for inheritance in Java?",
        answer:"D. We can’t extend Final classes in java",
        options:[
            "A. “extend” keyword is used to extend a class in java",
            "B. You can extend multiple classes in java",
            "C. Private members of the superclass are accessible to the subclass",
            "D. We can’t extend Final classes in java"
        ]
    },
    {
        numb:6,
        question: " Which of the below are unchecked exceptions in java?",
        answer:"A. RuntimeException",
        options:[
            "A. RuntimeException",
            "B. IOException",
            "C. ClassNotFoundException",
            "D. FileNotFoundException"
        ]
    },
    {
        numb:7,
        question: " Can we have two main methods in a java class?",
        answer:"A. Yes",
        options:[
            "A. Yes",
            "B. No",
            "C. Sometimes we can",
            "D. Depends on class it is defined"
        ]
    },
    {
        numb:8,
        question: " Which of the following for loop declaration is not valid?",
        answer:"A. for ( int i = 99; i >= 0; i / 9 )",
        options:[
            "A. for ( int i = 99; i >= 0; i / 9 )",
            "B. for ( int i = 7; i <= 77; i += 7 )",
            "C .for ( int i = 20; i >= 2; - -i )",
            "D. for ( int i = 2; i <= 20; i = 2* i )"
        ]
    },
    {
        numb:9,
        question: " What is the initial quantity of the ArrayList list?",
        answer:"B. 10",
        options:[
            "A. 5",
            "B. 10",
            "C. 0",
            "D. 100"
        ]
    },
    {
        numb:10,
        question: " Which of the following is a mutable class in java?",
        answer:"D. java.lang.StringBuilder",
        options:[
            "A. java.lang.String",
            "B. java.lang.Byte",
            "C. java.lang.Short",
            "D. java.lang.StringBuilder"
        ]
    },
    {
        numb:11,
        question: " Which of the following is a valid syntax to synchronize the HashMap?",
        answer:"C. Map m1 = Collections.synchronizedMap(hashMap);",
        options:[
            "A. Map m = hashMap.synchronizeMap();",
            "B. HashMap map =hashMap.synchronizeMap();",
            "C. Map m1 = Collections.synchronizedMap(hashMap);",
            "D. Map m2 = Collection.synchronizeMap(hashMap);"
        ]
    },
    {
        numb:12,
        question: " Which of the following is false?",
        answer:"B. rt.jar is an optional jar file",
        options:[
            "A. The rt.jar stands for the runtime jar",
            "B. rt.jar is an optional jar file",
            "C. rt.jar contains all the compiled class files",
            "D. All the classes available in rt.jar is known to the JVM"
        ]
    },
    {
        numb:13,
        question: " In java, jar stands for_____.",
        answer:"D. None of the above",
        options:[
            "A. Java Archive Runner",
            "B. Java Application Resource",
            "C. Java Application Runner",
            "D. None of the above"
        ]
    },
    {
        numb:14,
        question: " Which keyword is used for accessing the features of a package?",
        answer:"B. import",
        options:[
            "A. package",
            "B. import",
            "C. extends",
            "D. export"
        ]
    },
    {
        numb:15,
        question: " In which memory a String is stored, when we create a string using new operator?",
        answer:"C. Heap Memory",
        options:[
            "A. Stack",
            "B. String memory",
            "C. Heap Memory",
            "D. Random storage space"
        ]
    },
    {
        numb:16,
        question: " What do you mean by chained exceptions in Java?",
        answer:"C. Error and Exception class",
        options:[
            "A. RuntimeException and Error class",
            "B. Exception and VirtualMachineError class",
            "C. Error and Exception class",
            "D. IOException and VirtualMachineError class"
        ]
    },
    {
        numb:17,
        question: " Which option is false about the final keyword?",
        answer:"C. A final class cannot extend other classes",
        options:[
            "A. A final method cannot be overridden in its subclasses",
            "B. A final class cannot be extended",
            "C. A final class cannot extend other classes",
            "D. A final method can be inherited"
        ]
    },
    {
        numb:18,
        question: " Which of the following is an immediate subclass of the Panel class?",
        answer:"A. Applet class",
        options:[
            "A. Applet class",
            "B. Window class",
            "C. Frame class",
            "D. Dialog class"
        ]
    },
    {
        numb:19,
        question: " An interface with no fields or methods is known as a ______.",
        answer:"B. Marker Interface",
        options:[
            "A. Runnable Interface",
            "B. Marker Interface",
            "C. Abstract Interface",
            "D. CharSequence Interface"
        ]
    },
    {
        numb:20,
        question: " If a thread goes to sleep",
        answer:"B. It does not release any locks",
        options:[
            "A. It releases all the locks it has",
            "B. It does not release any locks",
            "C. It releases half of its locks",
            "D. It releases all of its lock except one"
        ]
    },
    {
        numb: 21,
        question: "What is the size of a long variable in Java?",
        answer: "B. 8 bytes",
        options: [
            "A. 2 bytes",
            "B. 8 bytes",
            "C. 4 bytes",
            "D. 1 byte"
        ]
    },
    {
        numb:22,
        question: "Which method must be implemented by all threads?",
        answer: "A. run()",
        options: [
            "A. run()",
            "B. start()",
            "C. stop()",
            "D. wait()"
        ]
    },
    {
        numb:23,
        question: "What is the default value of a boolean variable?",
        answer: "B. false",
        options: [
            "A. true",
            "B. false",
            "C. null",
            "D. Not defined"
        ]
    },
    {
        numb:24,
        question: "What does the expression float a = 35 / 0 return?",
        answer: "C. Infinity",
        options: [
            "A. 0",
            "B. Not a Number",
            "C. Infinity",
            "D. Run time exception"
        ]
    },
    {
        numb:25,
        question: "Which of the following is a valid declaration of an object of type Integer?",
        answer: "C. Integer i = new Integer(42);",
        options: [
            "A. Integer i = 42;",
            "B. Integer i = new Integer();",
            "C. Integer i = new Integer(42);",
            "D. Integer i = new Integer('42');"
        ]
    },
    {
        numb:26,
        question: "What is the root class in Java?",
        answer: "A. Object",
        options: [
            "A. Object",
            "B. Main",
            "C. Java",
            "D. System"
        ]
    },
    {
        numb:27,
        question: "What is the superclass of all classes in Java?",
        answer: "A. Object",
        options: [
            "A. Object",
            "B. Class",
            "C. Abstract",
            "D. None of the above"
        ]
    },
    {
        numb:28,
        question: "Which of the following is not a Java keyword?",
        answer: "D. String",
        options: [
            "A. static",
            "B. Boolean",
            "C. void",
            "D. String"
        ]
    },
    {
        numb:29,
        question: "What is the default value of a char in Java?",
        answer: "C. 0",
        options: [
            "A. null",
            "B. '\\u0000'",
            "C. 0",
            "D. Not defined"
        ]
    },
    {
        numb:30,
        question: "Which of the following is a checked exception in Java?",
        answer: "C. IOException",
        options: [
            "A. NullPointerException",
            "B. ArrayIndexOutOfBoundsException",
            "C. IOException",
            "D. ArithmeticException"
        ]
    },
    {
        numb:31,
        question: "Which of these is a final method in Object class?",
        answer: "C. getClass()",
        options: [
            "A. notify()",
            "B. wait()",
            "C. getClass()",
            "D. None of the above"
        ]
    },
    {
        numb:32,
        question: "What does JVM stand for?",
        answer: "B. Java Virtual Machine",
        options: [
            "A. Java Variable Method",
            "B. Java Virtual Machine",
            "C. Just Virtual Machine",
            "D. Java Very Large Machine"
        ]
    },
    {
        numb:33,
        question: "Which operator is used to concatenate two strings?",
        answer: "C. +",
        options: [
            "A. &",
            "B. *",
            "C. +",
            "D. -"
        ]
    },
    {
        numb:34,
        question: "What is the index of the first element in an array?",
        answer: "A. 0",
        options: [
            "A. 0",
            "B. 1",
            "C. -1",
            "D. None of the above"
        ]
    },
    {
        numb:35,
        question: "Which keyword is used to define a constant in Java?",
        answer: "D. final",
        options: [
            "A. const",
            "B. define",
            "C. constant",
            "D. final"
        ]
    },
    {
        numb:36,
        question: "Which of these is a Java keyword?",
        answer: "C. transient",
        options: [
            "A. String",
            "B. Class",
            "C. transient",
            "D. Reference"
        ]
    },
    {
        numb:37,
        question: "What is the default value of a float in Java?",
        answer: "B. 0.0f",
        options: [
            "A. 0",
            "B. 0.0f",
            "C. null",
            "D. Not defined"
        ]
    },
    {
        numb:38,
        question: "What is the return type of hashCode() method in Object?",
        answer: "B. int",
        options: [
            "A. Object",
            "B. int",
            "C. long",
            "D. void"
        ]
    },
    {
        numb:39,
        question: "Which of these is not a bitwise operator?",
        answer: "D. <>",
        options: [
            "A. &",
            "B. |",
            "C. ^",
            "D. <>"
        ]
    },
    {
        numb:40,
        question: "Which of these is not a valid Java Bit Manipulation operator?",
        answer: "A. <=",
        options: [
            "A. <=",
            "B. >>",
            "C. >>>",
            "D. <<<"
        ]
    }
];

let selectedQuestions = [];
for(let i = 0; i < 10; i++){
    let index = Math.floor(Math.random() * questions.length);
    selectedQuestions.push(questions[index]);
    questions.splice(index, 1); // This will prevent the same question from being selected more than once
}
