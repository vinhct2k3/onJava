export const quizSet2 = [
  {
    question: "Đâu là 4 tính chất chính của lập trình hướng đối tượng trong Java?",
    options: [
      "Tính đóng gói, tính kế thừa, tính đa hình, tính trừu tượng",
      "Tính đóng gói, tính kế thừa, tính chia sẻ, tính che giấu",
      "Tính bao bọc, tính đa hình, tính sắp xếp, tính logic",
      "Tính đóng gói, tính biến đổi, tính đa tướng, tính biểu diễn"
    ],
    answer: 0,
    explanation: "4 tính chất chính của OOP trong Java là: Tính đóng gói (Encapsulation) giúp bảo vệ dữ liệu khỏi truy cập trực tiếp; Tính kế thừa (Inheritance) cho phép tái sử dụng code; Tính đa hình (Polymorphism) cho phép một đối tượng có nhiều hình thái; và Tính trừu tượng (Abstraction) giúp ẩn chi tiết cài đặt và chỉ hiển thị chức năng cần thiết."
  },
  {
    question: "Tính đóng gói (Encapsulation) trong Java có nghĩa là gì?",
    options: [
      "Gói dữ liệu và phương thức thành một đơn vị và hạn chế truy cập trực tiếp",
      "Gói nhiều lớp thành một package",
      "Đóng gói thông tin trong các biến static",
      "Khả năng kết hợp nhiều thư viện thành một"
    ],
    answer: 0,
    explanation: "Tính đóng gói là việc gói dữ liệu (thuộc tính) và các phương thức xử lý dữ liệu đó vào trong một đơn vị duy nhất (lớp) và hạn chế quyền truy cập trực tiếp đến dữ liệu. Trong Java, điều này được thực hiện thông qua việc sử dụng access modifiers (private, protected, public) và các phương thức getter/setter."
  },
  {
    question: "Từ khóa nào dùng để ngăn một lớp không bị kế thừa trong Java?",
    options: ["final", "sealed", "static", "private"],
    answer: 0,
    explanation: "Từ khóa final khi áp dụng cho một lớp trong Java sẽ ngăn lớp đó không bị kế thừa. Ví dụ: public final class MyClass {...}. Một khi lớp được khai báo là final, không lớp nào có thể kế thừa (extends) từ nó. Các lớp như String, Integer, Double trong Java đều là final."
  },
  {
    question: "Khái niệm nào cho phép một lớp con sử dụng lại mã nguồn từ lớp cha?",
    options: ["Kế thừa (Inheritance)", "Đa hình (Polymorphism)", "Đóng gói (Encapsulation)", "Trừu tượng (Abstraction)"],
    answer: 0,
    explanation: "Kế thừa (Inheritance) là khái niệm cho phép một lớp con (subclass) sử dụng lại thuộc tính và phương thức từ lớp cha (superclass). Trong Java, kế thừa được thực hiện thông qua từ khóa 'extends'. Kế thừa giúp tái sử dụng code, tạo ra cấu trúc phân cấp giữa các lớp và là nền tảng cho tính đa hình."
  },
  {
    question: "Trong Java, từ khóa nào được sử dụng để tạo một đối tượng?",
    options: ["new", "create", "instance", "object"],
    answer: 0,
    explanation: "Từ khóa 'new' được sử dụng để tạo một đối tượng mới trong Java. Khi sử dụng từ khóa 'new', bộ nhớ được cấp phát cho đối tượng và constructor của lớp được gọi để khởi tạo đối tượng. Ví dụ: MyClass obj = new MyClass();"
  },
  {
    question: "Trong Java, từ khóa abstract được sử dụng để làm gì?",
    options: [
      "Khai báo lớp hoặc phương thức trừu tượng",
      "Khai báo biến toàn cục",
      "Khai báo hằng số",
      "Khai báo phương thức static"
    ],
    answer: 0
  },
  {
    question: "Phương thức trừu tượng (abstract method) có đặc điểm gì?",
    options: [
      "Không có thân phương thức, chỉ có khai báo",
      "Luôn được khai báo là static",
      "Luôn được khai báo là final",
      "Chỉ được sử dụng trong interface"
    ],
    answer: 0
  },
  {
    question: "Khi một lớp kế thừa từ một lớp khác, lớp con có thể làm gì?",
    options: [
      "Sử dụng các thuộc tính và phương thức public/protected của lớp cha",
      "Chỉ sử dụng các phương thức private của lớp cha",
      "Không thể ghi đè (override) phương thức của lớp cha",
      "Không thể truy cập đến constructor của lớp cha"
    ],
    answer: 0
  },
  {
    question: "Trong Java, đa hình (polymorphism) có hai loại chính, đó là:",
    options: [
      "Đa hình lúc biên dịch và đa hình lúc chạy",
      "Đa hình tĩnh và đa hình động",
      "Đa hình cấp cao và đa hình cấp thấp",
      "Cả A và B đều đúng"
    ],
    answer: 3
  },
  {
    question: "Constructor trong Java có đặc điểm gì?",
    options: [
      "Cùng tên với tên lớp và không có kiểu trả về",
      "Có thể được khai báo là abstract",
      "Có thể được khai báo là final",
      "Không thể overload (nạp chồng)"
    ],
    answer: 0
  },
  {
    question: "Trong Java, một lớp có thể kế thừa từ bao nhiêu lớp?",
    options: ["Một lớp", "Hai lớp", "Nhiều lớp", "Không giới hạn"],
    answer: 0
  },
  {
    question: "Phương thức nào được gọi tự động khi một đối tượng bị hủy trong Java?",
    options: ["finalize()", "destroy()", "dispose()", "delete()"],
    answer: 0
  },
  {
    question: "Từ khóa super trong Java được sử dụng để làm gì?",
    options: [
      "Tham chiếu đến lớp cha trực tiếp",
      "Tham chiếu đến lớp hiện tại",
      "Tham chiếu đến đối tượng hiện tại",
      "Tham chiếu đến lớp gốc Object"
    ],
    answer: 0
  },
  {
    question: "Phạm vi truy cập protected trong Java có nghĩa là gì?",
    options: [
      "Có thể truy cập từ cùng package hoặc lớp con",
      "Chỉ có thể truy cập từ cùng lớp",
      "Có thể truy cập từ bất kỳ đâu",
      "Chỉ có thể truy cập từ lớp con"
    ],
    answer: 0
  },
  {
    question: "Khái niệm nào trong OOP đề cập đến việc hiển thị chỉ các chi tiết cần thiết và ẩn các chi tiết phức tạp?",
    options: ["Trừu tượng (Abstraction)", "Đóng gói (Encapsulation)", "Kế thừa (Inheritance)", "Đa hình (Polymorphism)"],
    answer: 0
  },
  {
    question: "Sự khác biệt giữa Interface và Abstract class trong Java là gì?",
    options: [
      "Interface chỉ chứa phương thức trừu tượng và hằng số, Abstract class có thể chứa phương thức có thân hàm",
      "Interface có thể kế thừa từ nhiều interface khác, Abstract class chỉ có thể kế thừa từ một abstract class",
      "Một lớp có thể implements nhiều interface nhưng chỉ có thể extends một abstract class",
      "Tất cả các phương án trên đều đúng"
    ],
    answer: 3
  },
  {
    question: "Từ khóa nào được sử dụng để triển khai một interface trong Java?",
    options: ["implements", "extends", "inherits", "using"],
    answer: 0
  },
  {
    question: "Đa hình lúc biên dịch (Compile-time polymorphism) trong Java được thực hiện thông qua?",
    options: [
      "Method overloading (nạp chồng phương thức)",
      "Method overriding (ghi đè phương thức)",
      "Dynamic binding (liên kết động)",
      "Reflection"
    ],
    answer: 0
  },
  {
    question: "Đa hình lúc chạy (Runtime polymorphism) trong Java được thực hiện thông qua?",
    options: [
      "Method overriding (ghi đè phương thức)",
      "Method overloading (nạp chồng phương thức)",
      "Static binding (liên kết tĩnh)",
      "Generics"
    ],
    answer: 0
  },
  {
    question: "Biến instance trong Java là gì?",
    options: [
      "Biến được khai báo trong một lớp, không phải trong phương thức",
      "Biến được khai báo trong phương thức",
      "Biến được khai báo với từ khóa static",
      "Biến được khai báo trong constructor"
    ],
    answer: 0
  },
  {
    question: "Từ khóa nào được sử dụng để khai báo biến thuộc về lớp chứ không phải đối tượng?",
    options: ["static", "final", "global", "constant"],
    answer: 0
  },
  {
    question: "Trong Java, phạm vi truy cập mặc định (không có modifier) cho phép truy cập từ đâu?",
    options: ["Cùng package", "Mọi nơi", "Chỉ trong lớp", "Lớp con"],
    answer: 0
  },
  {
    question: "Nguyên tắc thiết kế SOLID trong OOP gồm bao nhiêu nguyên tắc?",
    options: ["5", "6", "4", "7"],
    answer: 0
  },
  {
    question: "Nguyên tắc nào trong SOLID đề cập đến việc 'một lớp chỉ nên thay đổi vì một lý do duy nhất'?",
    options: [
      "Single Responsibility Principle (SRP)",
      "Open-Closed Principle (OCP)",
      "Liskov Substitution Principle (LSP)",
      "Interface Segregation Principle (ISP)"
    ],
    answer: 0
  },
  {
    question: "Các thành phần cơ bản của một lớp trong Java gồm những gì?",
    options: [
      "Fields (thuộc tính), Constructors, Methods",
      "Chỉ Methods",
      "Chỉ Fields và Methods",
      "Fields, Methods, Packages"
    ],
    answer: 0
  },
  {
    question: "Overloading (nạp chồng) phương thức trong Java có nghĩa là gì?",
    options: [
      "Cùng tên nhưng khác tham số",
      "Cùng tên và cùng tham số nhưng khác kiểu trả về",
      "Khác tên nhưng cùng tham số",
      "Khác tên và khác tham số"
    ],
    answer: 0
  },
  {
    question: "Overriding (ghi đè) phương thức trong Java có nghĩa là gì?",
    options: [
      "Lớp con định nghĩa lại phương thức đã được định nghĩa trong lớp cha",
      "Định nghĩa nhiều phương thức cùng tên trong cùng một lớp",
      "Định nghĩa phương thức private trong lớp con",
      "Định nghĩa phương thức final trong lớp con"
    ],
    answer: 0
  },
  {
    question: "Annotation @Override trong Java có tác dụng gì?",
    options: [
      "Đảm bảo phương thức ghi đè đúng một phương thức của lớp cha",
      "Ép buộc compiler ghi đè phương thức",
      "Đánh dấu phương thức là deprecated",
      "Ẩn phương thức khỏi Javadoc"
    ],
    answer: 0
  },
  {
    question: "Khi nào nên sử dụng abstract class thay vì interface trong Java?",
    options: [
      "Khi muốn chia sẻ code giữa các lớp liên quan",
      "Khi cần định nghĩa một hợp đồng mà không quan tâm đến triển khai",
      "Khi muốn hỗ trợ đa kế thừa",
      "Khi muốn định nghĩa hằng số để sử dụng trong nhiều lớp"
    ],
    answer: 0
  },
  {
    question: "Phương thức được gọi đầu tiên khi một đối tượng Java được tạo ra là gì?",
    options: ["Constructor", "init()", "main()", "firstCall()"],
    answer: 0
  },
  {
    question: "Trong Java, nếu một lớp con không định nghĩa constructor, điều gì sẽ xảy ra?",
    options: [
      "Constructor mặc định (không tham số) của lớp cha sẽ được gọi",
      "Sẽ có lỗi biên dịch",
      "Constructor với nhiều tham số nhất của lớp cha sẽ được gọi",
      "Không có constructor nào được gọi"
    ],
    answer: 0
  },
  {
    question: "Trong Java, từ khóa this được sử dụng để làm gì?",
    options: [
      "Tham chiếu đến đối tượng hiện tại",
      "Tham chiếu đến lớp hiện tại",
      "Tham chiếu đến lớp cha",
      "Tham chiếu đến phương thức hiện tại"
    ],
    answer: 0
  },
  {
    question: "Điều gì xảy ra nếu một phương thức được khai báo là final trong Java?",
    options: [
      "Không thể ghi đè (override) phương thức đó",
      "Không thể nạp chồng (overload) phương thức đó",
      "Không thể gọi phương thức đó từ lớp khác",
      "Phương thức đó phải được định nghĩa trong constructor"
    ],
    answer: 0
  },
  {
    question: "Sự khác biệt giữa phương thức equals() và toán tử == trong Java?",
    options: [
      "equals() so sánh nội dung, == so sánh tham chiếu",
      "equals() so sánh tham chiếu, == so sánh nội dung",
      "equals() chỉ dùng cho String, == dùng cho các kiểu dữ liệu khác",
      "Không có sự khác biệt"
    ],
    answer: 0
  },
  {
    question: "Kỹ thuật design pattern nào giúp tạo ra một đối tượng duy nhất cho cả ứng dụng?",
    options: ["Singleton Pattern", "Factory Pattern", "Builder Pattern", "Adapter Pattern"],
    answer: 0
  },
  {
    question: "Mục đích chính của Factory Pattern trong Java là gì?",
    options: [
      "Tạo đối tượng mà không cần chỉ định chính xác lớp của đối tượng",
      "Tạo một instance duy nhất của một lớp",
      "Tạo các đối tượng có thể được sao chép",
      "Hỗ trợ kết nối giữa các interface không tương thích"
    ],
    answer: 0
  },
  {
    question: "Từ khóa transient trong Java dùng để làm gì?",
    options: [
      "Đánh dấu một trường không được serialized",
      "Đánh dấu một trường không được thay đổi",
      "Đánh dấu một phương thức không được ghi đè",
      "Đánh dấu một lớp không được kế thừa"
    ],
    answer: 0
  },
  {
    question: "Inner class trong Java là gì?",
    options: [
      "Lớp được định nghĩa bên trong một lớp khác",
      "Lớp được định nghĩa trong một package",
      "Lớp được định nghĩa bên trong một method",
      "Lớp được định nghĩa bên trong một interface"
    ],
    answer: 0
  },
  {
    question: "Tính đa hình chỉ xảy ra trong trường hợp nào?",
    options: [
      "Khi có kế thừa và ghi đè phương thức",
      "Khi sử dụng static methods",
      "Khi sử dụng private methods",
      "Khi sử dụng final methods"
    ],
    answer: 0
  },
  {
    question: "Khái niệm 'composition' trong OOP có nghĩa là gì?",
    options: [
      "Một lớp chứa các đối tượng của lớp khác",
      "Một lớp kế thừa từ nhiều lớp khác",
      "Một lớp kế thừa từ một lớp khác",
      "Một lớp triển khai nhiều interface"
    ],
    answer: 0
  },
  {
    question: "Khái niệm 'aggregation' trong OOP khác với 'composition' như thế nào?",
    options: [
      "Aggregation là mối quan hệ 'has-a' lỏng lẻo, composition là mối quan hệ 'has-a' chặt chẽ",
      "Aggregation là mối quan hệ 'is-a', composition là mối quan hệ 'has-a'",
      "Aggregation chỉ áp dụng cho interface, composition áp dụng cho lớp",
      "Aggregation chỉ cho phép kế thừa một phần, composition cho phép kế thừa toàn bộ"
    ],
    answer: 0
  },
  {
    question: "Lớp trừu tượng (abstract class) trong Java khác với lớp thông thường như thế nào?",
    options: [
      "Không thể tạo đối tượng trực tiếp từ lớp trừu tượng",
      "Không thể kế thừa từ lớp trừu tượng",
      "Lớp trừu tượng không thể chứa phương thức có thân hàm",
      "Lớp trừu tượng không thể chứa biến instance"
    ],
    answer: 0
  },
  {
    question: "Nguyên tắc Dependency Inversion Principle (DIP) trong SOLID là gì?",
    options: [
      "Các module cấp cao không nên phụ thuộc vào module cấp thấp, cả hai nên phụ thuộc vào abstractions",
      "Một lớp chỉ nên có một lý do để thay đổi",
      "Các lớp nên mở rộng nhưng không nên sửa đổi",
      "Các lớp con phải thay thế được lớp cha mà không làm thay đổi tính đúng đắn của chương trình"
    ],
    answer: 0
  },
  {
    question: "Một lớp triển khai (implement) một interface trong Java phải làm gì?",
    options: [
      "Cung cấp định nghĩa cho tất cả các phương thức của interface",
      "Chỉ cần triển khai một số phương thức quan trọng",
      "Không cần triển khai phương thức nào nếu khai báo lớp là abstract",
      "Chỉ triển khai các phương thức có annotation @Override"
    ],
    answer: 0
  },
  {
    question: "Phương thức nào trong Java Object được gọi khi sử dụng toán tử + với String?",
    options: ["toString()", "valueOf()", "append()", "concat()"],
    answer: 0
  },
  {
    question: "Từ khóa instanceof trong Java dùng để làm gì?",
    options: [
      "Kiểm tra một đối tượng có phải là instance của một lớp cụ thể không",
      "Tạo một instance mới của lớp",
      "Kiểm tra một lớp có phải là lớp con của một lớp khác không",
      "Kiểm tra một lớp có implements một interface nào đó không"
    ],
    answer: 0
  },
  {
    question: "Phương thức clone() trong Java thuộc interface nào?",
    options: ["Cloneable", "Comparable", "Serializable", "Runnable"],
    answer: 0
  },
  {
    question: "Đâu là một ưu điểm của tính đóng gói (encapsulation) trong Java?",
    options: [
      "Tăng tính bảo mật bằng cách kiểm soát quyền truy cập dữ liệu",
      "Tiết kiệm bộ nhớ khi chạy chương trình",
      "Tăng tốc độ thực thi chương trình",
      "Giảm số lượng code cần viết"
    ],
    answer: 0
  },
  {
    question: "Trong Java, từ khóa nào được sử dụng để ngăn một phương thức bị ghi đè?",
    options: ["final", "abstract", "static", "private"],
    answer: 0
  },
  {
    question: "Khái niệm nào mô tả việc ẩn chi tiết triển khai và chỉ hiển thị chức năng cho người dùng?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    answer: 0,
    explanation: "Encapsulation (tính đóng gói) là khái niệm mô tả việc ẩn chi tiết triển khai và chỉ hiển thị chức năng cho người dùng. Trong Java, tính đóng gói thường được thực hiện bằng cách khai báo biến private và cung cấp phương thức getter/setter public để truy cập."
  },
  {
    question: "Access modifier nào trong Java cho phép truy cập trong cùng lớp và lớp con?",
    options: ["protected", "private", "public", "default"],
    answer: 0,
    explanation: "Access modifier protected cho phép truy cập trong cùng lớp, lớp con và các lớp trong cùng package. Private chỉ cho phép truy cập trong cùng lớp, public cho phép truy cập từ mọi nơi, và default (không khai báo) cho phép truy cập trong cùng package."
  },
  {
    question: "Khái niệm nào cho phép một lớp kế thừa thuộc tính và phương thức từ lớp khác?",
    options: ["Inheritance", "Polymorphism", "Encapsulation", "Association"],
    answer: 0,
    explanation: "Inheritance (tính kế thừa) cho phép một lớp kế thừa thuộc tính và phương thức từ lớp khác. Trong Java, kế thừa được thực hiện thông qua từ khóa extends. Lớp kế thừa được gọi là lớp con (subclass), và lớp được kế thừa gọi là lớp cha (superclass)."
  },
  {
    question: "Lớp nào không thể tạo đối tượng trực tiếp trong Java?",
    options: ["Abstract class", "Final class", "Static class", "Inner class"],
    answer: 0,
    explanation: "Abstract class (lớp trừu tượng) không thể tạo đối tượng trực tiếp trong Java. Để sử dụng lớp trừu tượng, bạn phải tạo một lớp con kế thừa từ nó và triển khai các phương thức trừu tượng. Lớp trừu tượng được khai báo với từ khóa abstract."
  },
  {
    question: "Đâu là đặc điểm của kế thừa đa cấp trong Java?",
    options: [
      "Một lớp con kế thừa từ một lớp cha, lớp cha lại kế thừa từ lớp khác",
      "Một lớp kế thừa từ nhiều lớp cha",
      "Nhiều lớp con kế thừa từ một lớp cha",
      "Kế thừa phương thức nhưng không kế thừa thuộc tính"
    ],
    answer: 0,
    explanation: "Kế thừa đa cấp (multilevel inheritance) trong Java là khi một lớp con kế thừa từ một lớp cha, và lớp cha đó lại kế thừa từ một lớp khác. Ví dụ: lớp C kế thừa từ lớp B, lớp B kế thừa từ lớp A, tạo thành chuỗi kế thừa A → B → C."
  },
  {
    question: "Khái niệm nào cho phép một thao tác được thực hiện theo nhiều cách khác nhau?",
    options: ["Polymorphism", "Inheritance", "Encapsulation", "Abstraction"],
    answer: 0,
    explanation: "Polymorphism (tính đa hình) cho phép một thao tác được thực hiện theo nhiều cách khác nhau. Trong Java, tính đa hình thường được thể hiện qua việc ghi đè phương thức (method overriding) và nạp chồng phương thức (method overloading)."
  },
  {
    question: "Từ khóa nào trong Java không cho phép lớp con ghi đè phương thức?",
    options: ["final", "static", "abstract", "public"],
    answer: 0,
    explanation: "Từ khóa final trong Java không cho phép lớp con ghi đè phương thức. Khi một phương thức được khai báo là final, nó không thể bị ghi đè bởi lớp con. Điều này thường được sử dụng vì lý do bảo mật hoặc để đảm bảo tính nhất quán của phương thức."
  },
  {
    question: "Khái niệm nào mô tả việc thiết kế chức năng mà không quan tâm đến chi tiết triển khai?",
    options: ["Abstraction", "Encapsulation", "Polymorphism", "Inheritance"],
    answer: 0,
    explanation: "Abstraction (tính trừu tượng) mô tả việc thiết kế chức năng mà không quan tâm đến chi tiết triển khai. Trong Java, tính trừu tượng được thực hiện thông qua abstract class và interface, cho phép tập trung vào những gì đối tượng làm thay vì cách nó làm."
  },
  {
    question: "Java hỗ trợ loại kế thừa nào?",
    options: [
      "Single inheritance",
      "Multiple inheritance",
      "Hybrid inheritance",
      "Circular inheritance"
    ],
    answer: 0,
    explanation: "Java chỉ hỗ trợ Single inheritance (kế thừa đơn) cho các lớp, nghĩa là một lớp chỉ có thể kế thừa từ một lớp cha. Tuy nhiên, Java cho phép một lớp triển khai nhiều interface, đây là cách để đạt được chức năng tương tự như kế thừa đa (multiple inheritance)."
  },
  {
    question: "Interface trong Java?",
    options: [
      "Chỉ chứa các phương thức trừu tượng và hằng số",
      "Có thể chứa các phương thức cụ thể và biến instance",
      "Không thể kế thừa từ interface khác",
      "Là một lớp đặc biệt có thể khởi tạo"
    ],
    answer: 0,
    explanation: "Interface trong Java truyền thống chỉ chứa các phương thức trừu tượng và hằng số (biến static final). Từ Java 8, interface có thể có phương thức mặc định (default method) và phương thức tĩnh (static method). Từ Java 9, interface có thể có phương thức private."
  },
  {
    question: "Đâu là đặc điểm của phương thức trừu tượng trong Java?",
    options: [
      "Không có thân phương thức",
      "Luôn có từ khóa static",
      "Không thể được khai báo trong interface",
      "Có thể được gọi trực tiếp từ lớp trừu tượng"
    ],
    answer: 0,
    explanation: "Phương thức trừu tượng (abstract method) trong Java không có thân phương thức, chỉ có khai báo. Phương thức trừu tượng được khai báo với từ khóa abstract và phải được ghi đè (implement) bởi lớp con không trừu tượng."
  },
  {
    question: "Đâu là cách đúng để ghi đè (override) một phương thức trong Java?",
    options: [
      "Cùng tên, cùng tham số, cùng kiểu trả về hoặc kiểu con",
      "Khác tên, cùng tham số, cùng kiểu trả về",
      "Cùng tên, khác tham số, cùng kiểu trả về",
      "Cùng tên, cùng tham số, kiểu trả về bất kỳ"
    ],
    answer: 0,
    explanation: "Để ghi đè một phương thức trong Java, phương thức ở lớp con phải có cùng tên, cùng danh sách tham số, và kiểu trả về phải giống hoặc là kiểu con của kiểu trả về của phương thức ở lớp cha. Ngoài ra, phạm vi truy cập không được hẹp hơn phương thức ở lớp cha."
  },
  {
    question: "Khi nào sử dụng từ khóa super trong Java?",
    options: [
      "Gọi constructor hoặc phương thức của lớp cha",
      "Tạo đối tượng mới của lớp hiện tại",
      "Truy cập thành viên tĩnh của lớp",
      "Gọi phương thức của lớp con"
    ],
    answer: 0,
    explanation: "Từ khóa super trong Java được sử dụng để gọi constructor hoặc phương thức của lớp cha. super() gọi constructor của lớp cha, super.methodName() gọi phương thức của lớp cha, đặc biệt hữu ích khi phương thức đó đã bị ghi đè trong lớp con."
  },
  {
    question: "Từ khóa nào không thể sử dụng cùng với abstract trong Java?",
    options: ["final", "protected", "public", "static"],
    answer: 0,
    explanation: "Từ khóa final không thể sử dụng cùng với abstract trong Java vì chúng mâu thuẫn nhau. final ngăn phương thức bị ghi đè, trong khi abstract yêu cầu phương thức phải được ghi đè. Tương tự, một lớp không thể vừa là abstract vừa là final."
  },
  {
    question: "Đâu là mục đích chính của constructor trong Java?",
    options: [
      "Khởi tạo đối tượng",
      "Hủy đối tượng",
      "Kế thừa từ lớp khác",
      "Ghi đè phương thức"
    ],
    answer: 0,
    explanation: "Mục đích chính của constructor trong Java là khởi tạo đối tượng. Constructor được gọi khi từ khóa new được sử dụng để tạo đối tượng. Nó thường được sử dụng để khởi tạo các biến thành viên của lớp và thực hiện các thiết lập cần thiết khác."
  },
  {
    question: "Đâu là đặc điểm của biến static trong Java?",
    options: [
      "Thuộc về lớp, không thuộc về đối tượng",
      "Phải được khởi tạo khi khai báo",
      "Không thể truy cập từ phương thức non-static",
      "Luôn có giá trị mặc định là null"
    ],
    answer: 0,
    explanation: "Biến static trong Java thuộc về lớp, không thuộc về đối tượng cụ thể nào. Điều này có nghĩa là tất cả các đối tượng của lớp đều chia sẻ cùng một biến static, và biến static có thể được truy cập mà không cần tạo đối tượng của lớp."
  },
  {
    question: "So sánh nào đúng giữa abstract class và interface trong Java?",
    options: [
      "Abstract class có thể có constructor, interface thì không",
      "Abstract class không thể có phương thức cụ thể, interface có thể",
      "Abstract class không thể có biến instance, interface có thể",
      "Một lớp có thể kế thừa nhiều abstract class"
    ],
    answer: 0,
    explanation: "Abstract class có thể có constructor, trong khi interface thì không. Constructor trong abstract class thường được sử dụng để khởi tạo các biến thành viên và được gọi khi tạo đối tượng của lớp con."
  },
  {
    question: "Đâu là sự khác biệt giữa overloading và overriding trong Java?",
    options: [
      "Overloading xảy ra trong cùng một lớp, overriding xảy ra giữa lớp cha và lớp con",
      "Overloading yêu cầu cùng tên phương thức và tham số, overriding yêu cầu khác tên",
      "Overloading không thể thay đổi kiểu trả về, overriding phải thay đổi kiểu trả về",
      "Overloading không được Java hỗ trợ, chỉ có overriding được hỗ trợ"
    ],
    answer: 0,
    explanation: "Overloading (nạp chồng) xảy ra trong cùng một lớp khi có nhiều phương thức cùng tên nhưng khác tham số. Overriding (ghi đè) xảy ra giữa lớp cha và lớp con khi lớp con cung cấp triển khai cụ thể cho phương thức đã được khai báo trong lớp cha."
  },
  {
    question: "Phương thức nào được gọi tự động khi đối tượng được tạo trong Java?",
    options: ["Constructor", "Finalizer", "Main method", "Static initializer"],
    answer: 0,
    explanation: "Constructor (hàm khởi tạo) được gọi tự động khi đối tượng được tạo trong Java. Mỗi khi từ khóa new được sử dụng để tạo đối tượng, constructor của lớp sẽ được gọi để khởi tạo đối tượng."
  },
  {
    question: "Đâu là cách triển khai singleton pattern trong Java?",
    options: [
      "Tạo constructor private và phương thức static để trả về instance duy nhất",
      "Khai báo lớp là final và constructor là public",
      "Tạo constructor public và phương thức abstract để trả về instance",
      "Khai báo lớp là interface và triển khai static method"
    ],
    answer: 0,
    explanation: "Singleton pattern trong Java được triển khai bằng cách tạo constructor private để ngăn việc tạo đối tượng từ bên ngoài và cung cấp một phương thức static để trả về instance duy nhất của lớp. Instance này thường được lưu trữ trong một biến static private."
  },
  {
    question: "Đâu là vai trò chính của từ khóa this trong Java?",
    options: [
      "Tham chiếu đến đối tượng hiện tại",
      "Gọi constructor của lớp cha",
      "Tạo một đối tượng mới",
      "Truy cập thành viên tĩnh"
    ],
    answer: 0,
    explanation: "Vai trò chính của từ khóa this trong Java là tham chiếu đến đối tượng hiện tại. Nó thường được sử dụng để phân biệt biến thành viên và tham số có cùng tên, gọi constructor khác trong cùng lớp, hoặc truyền tham chiếu đến đối tượng hiện tại."
  },
  {
    question: "Đâu là đặc điểm của lớp final trong Java?",
    options: [
      "Không thể được kế thừa",
      "Không thể có phương thức",
      "Phải là lớp trừu tượng",
      "Không thể có constructor"
    ],
    answer: 0,
    explanation: "Lớp được khai báo với từ khóa final trong Java không thể được kế thừa bởi bất kỳ lớp nào khác. Điều này thường được sử dụng vì lý do bảo mật hoặc hiệu suất, hoặc khi chắc chắn không muốn lớp đó bị mở rộng."
  },
  {
    question: "Khái niệm nào mô tả khả năng một đối tượng có thể được tham chiếu bởi nhiều kiểu dữ liệu khác nhau?",
    options: [
      "Upcasting",
      "Downcasting",
      "Typecasting",
      "Multicasting"
    ],
    answer: 0,
    explanation: "Upcasting là khái niệm mô tả khả năng một đối tượng của lớp con có thể được tham chiếu bởi biến của lớp cha. Đây là cơ chế quan trọng để thực hiện tính đa hình trong Java. Ví dụ: Animal animal = new Dog(); là upcasting từ Dog lên Animal."
  },
  {
    question: "Đâu là điểm khác biệt giữa lớp abstract và lớp concrete trong Java?",
    options: [
      "Lớp abstract không thể được khởi tạo trực tiếp, lớp concrete có thể",
      "Lớp abstract không thể có phương thức, lớp concrete có thể",
      "Lớp abstract không thể được kế thừa, lớp concrete có thể",
      "Lớp abstract không thể có biến thành viên, lớp concrete có thể"
    ],
    answer: 0,
    explanation: "Điểm khác biệt chính giữa lớp abstract và lớp concrete trong Java là lớp abstract không thể được khởi tạo trực tiếp (không thể tạo đối tượng) trong khi lớp concrete có thể. Lớp abstract thường chứa một hoặc nhiều phương thức abstract, nhưng cũng có thể chứa phương thức concrete và biến thành viên."
  },
  {
    question: "Khi nào một phương thức trong Java không thể được overriding?",
    options: [
      "Khi nó được khai báo là final",
      "Khi nó có tham số",
      "Khi nó có kiểu trả về void",
      "Khi nó là public"
    ],
    answer: 0,
    explanation: "Một phương thức trong Java không thể được overriding (ghi đè) khi nó được khai báo là final. Các phương thức static và private cũng không thể bị ghi đè, nhưng phương thức static có thể bị ẩn (hiding) bởi phương thức cùng tên trong lớp con."
  },
  {
    question: "Từ khóa nào được sử dụng để gọi constructor của lớp cha trong Java?",
    options: ["super()", "this()", "parent()", "base()"],
    answer: 0,
    explanation: "Từ khóa super() được sử dụng để gọi constructor của lớp cha trong Java. Nó phải là câu lệnh đầu tiên trong constructor của lớp con. Nếu không gọi super() một cách rõ ràng, Java sẽ tự động gọi super() không tham số."
  },
  {
    question: "Đâu là đặc điểm của phạm vi truy cập default trong Java?",
    options: [
      "Chỉ truy cập được trong cùng package",
      "Truy cập được ở mọi nơi",
      "Chỉ truy cập được trong cùng lớp",
      "Truy cập được trong cùng lớp và lớp con"
    ],
    answer: 0,
    explanation: "Phạm vi truy cập default (không khai báo bất kỳ modifier nào) trong Java chỉ cho phép truy cập trong cùng package. Các lớp trong package khác không thể truy cập các thành phần có phạm vi default, kể cả khi chúng là lớp con."
  },
  {
    question: "Trong Java, phương thức nào của lớp Object được gọi khi sử dụng toán tử == với hai đối tượng?",
    options: [
      "Không có phương thức nào, == so sánh tham chiếu",
      "equals()",
      "compareTo()",
      "hashCode()"
    ],
    answer: 0,
    explanation: "Trong Java, khi sử dụng toán tử == với hai đối tượng, không có phương thức nào được gọi. Toán tử == so sánh trực tiếp địa chỉ tham chiếu của đối tượng trong bộ nhớ, không phải nội dung. Để so sánh nội dung, ta sử dụng phương thức equals()."
  },
  {
    question: "Khái niệm nào mô tả việc một đối tượng có thể được sử dụng thông qua interface của nó mà không cần biết triển khai cụ thể?",
    options: [
      "Abstraction",
      "Encapsulation",
      "Polymorphism",
      "Inheritance"
    ],
    answer: 0,
    explanation: "Abstraction (tính trừu tượng) mô tả việc một đối tượng có thể được sử dụng thông qua interface của nó mà không cần biết triển khai cụ thể. Điều này cho phép tách biệt giao diện sử dụng (what) khỏi chi tiết triển khai (how), làm cho code dễ bảo trì và mở rộng hơn."
  },
  {
    question: "Từ Java 8, interface có thể chứa loại phương thức nào?",
    options: [
      "Default method",
      "Constructor",
      "Khối khởi tạo tĩnh",
      "Final method"
    ],
    answer: 0,
    explanation: "Từ Java 8, interface có thể chứa default method (phương thức mặc định) với từ khóa default. Các phương thức này có thân phương thức và không bắt buộc các lớp triển khai interface phải ghi đè. Java 8 cũng giới thiệu static method trong interface."
  },
  {
    question: "Đâu là cách đúng để triển khai nhiều interface trong Java?",
    options: [
      "class MyClass implements Interface1, Interface2 {}",
      "class MyClass implements Interface1 implements Interface2 {}",
      "class MyClass extends Interface1, Interface2 {}",
      "class MyClass with Interface1, Interface2 {}"
    ],
    answer: 0,
    explanation: "Cách đúng để triển khai nhiều interface trong Java là sử dụng từ khóa implements một lần và liệt kê các interface cách nhau bằng dấu phẩy: class MyClass implements Interface1, Interface2 {}"
  },
  {
    question: "Java có hỗ trợ đa kế thừa (multiple inheritance) cho các lớp không?",
    options: [
      "Không",
      "Có",
      "Chỉ từ Java 8 trở đi",
      "Chỉ với annotation @MultipleInheritance"
    ],
    answer: 0,
    explanation: "Java không hỗ trợ đa kế thừa (multiple inheritance) cho các lớp. Một lớp chỉ có thể kế thừa từ một lớp duy nhất. Tuy nhiên, Java cho phép một lớp triển khai nhiều interface, đây là cách để đạt được chức năng tương tự như kế thừa đa (multiple inheritance)."
  },
  {
    question: "Đâu là mục đích chính của thiết kế theo interface trong Java?",
    options: [
      "Giảm sự phụ thuộc vào triển khai cụ thể",
      "Tăng hiệu suất chương trình",
      "Giảm số lượng lớp trong chương trình",
      "Tăng tính đóng gói của dữ liệu"
    ],
    answer: 0,
    explanation: "Mục đích chính của thiết kế theo interface trong Java là giảm sự phụ thuộc vào triển khai cụ thể. Điều này cho phép các thành phần phần mềm chỉ phụ thuộc vào giao diện (interface), không phải triển khai cụ thể, làm cho hệ thống dễ thay đổi, mở rộng và kiểm thử hơn."
  },
  {
    question: "Khi nào sử dụng từ khóa instanceof trong Java?",
    options: [
      "Kiểm tra một đối tượng có phải là instance của một lớp cụ thể",
      "Tạo một instance mới của lớp",
      "Kiểm tra hai lớp có cùng một cha",
      "Kiểm tra một lớp có triển khai một interface"
    ],
    answer: 0,
    explanation: "Từ khóa instanceof trong Java được sử dụng để kiểm tra một đối tượng có phải là instance của một lớp cụ thể không. Ví dụ: if (obj instanceof String) { ... }"
  },
  {
    question: "Đâu là hạn chế của tính đa hình trong Java?",
    options: [
      "Không áp dụng được cho biến thành viên",
      "Chỉ áp dụng với phương thức public",
      "Không thể áp dụng với interface",
      "Chỉ áp dụng trong cùng package"
    ],
    answer: 0,
    explanation: "Một hạn chế của tính đa hình trong Java là nó không áp dụng được cho biến thành viên. Ngay cả khi lớp con ghi đè biến của lớp cha (thực tế là ẩn biến đó), việc truy cập biến vẫn phụ thuộc vào kiểu tham chiếu, không phụ thuộc vào kiểu thực tế của đối tượng."
  },
  {
    question: "Khi nào sử dụng abstract class thay vì interface trong Java?",
    options: [
      "Khi cần chia sẻ code giữa các lớp liên quan",
      "Khi muốn cho phép đa kế thừa",
      "Khi không cần triển khai phương thức",
      "Khi cần định nghĩa hằng số"
    ],
    answer: 0,
    explanation: "Nên sử dụng abstract class thay vì interface trong Java khi cần chia sẻ code giữa các lớp liên quan. Abstract class có thể chứa triển khai chung, biến thành viên, constructor, và các phương thức non-abstract, cho phép tái sử dụng code hiệu quả giữa các lớp con."
  },
  {
    question: "Đâu là đặc điểm của inner class (lớp bên trong) trong Java?",
    options: [
      "Có thể truy cập các thành viên private của lớp bên ngoài",
      "Không thể khai báo thành viên static",
      "Phải triển khai một interface",
      "Không thể kế thừa từ lớp khác"
    ],
    answer: 0,
    explanation: "Một đặc điểm quan trọng của inner class (lớp bên trong) trong Java là nó có thể truy cập các thành viên private của lớp bên ngoài (outer class). Điều này tạo ra sự gắn kết chặt chẽ giữa inner class và outer class, hữu ích cho việc đóng gói."
  },
  {
    question: "Từ khóa static có thể được áp dụng cho cái nào sau đây trong Java?",
    options: [
      "Inner class",
      "Abstract method",
      "Interface",
      "Constructor"
    ],
    answer: 0,
    explanation: "Trong Java, từ khóa static có thể được áp dụng cho inner class, tạo ra static nested class. Khác với inner class thông thường, static nested class không có tham chiếu đến instance của lớp bên ngoài và chỉ có thể truy cập các thành viên static của lớp bên ngoài."
  },
  {
    question: "Cơ chế nào cho phép một lớp con sử dụng lại code từ lớp cha mà không cần viết lại?",
    options: [
      "Code reuse",
      "Code duplication",
      "Code refactoring",
      "Code optimization"
    ],
    answer: 0,
    explanation: "Code reuse (tái sử dụng mã) là cơ chế cho phép một lớp con sử dụng lại code từ lớp cha mà không cần viết lại. Đây là một trong những lợi ích chính của tính kế thừa trong lập trình hướng đối tượng."
  },
  {
    question: "Đâu là đặc điểm của biến final trong Java?",
    options: [
      "Không thể thay đổi sau khi gán giá trị",
      "Luôn phải khởi tạo khi khai báo",
      "Không thể là tham số của phương thức",
      "Chỉ có thể là biến tĩnh (static)"
    ],
    answer: 0,
    explanation: "Biến final trong Java không thể thay đổi sau khi đã được gán giá trị. Đối với biến primitive, điều này có nghĩa là giá trị không thể thay đổi; đối với biến tham chiếu, điều này có nghĩa là tham chiếu không thể chỉ đến đối tượng khác, nhưng nội dung của đối tượng vẫn có thể thay đổi."
  },
  {
    question: "Lớp nào trong Java không thể có lớp con?",
    options: [
      "Final class",
      "Static class",
      "Public class",
      "Protected class"
    ],
    answer: 0,
    explanation: "Final class trong Java không thể có lớp con. Khi một lớp được khai báo với từ khóa final, nó không thể được kế thừa bởi bất kỳ lớp nào khác. Ví dụ về final class trong Java là String và các lớp wrapper như Integer, Boolean, etc."
  },
  {
    question: "Đâu là design pattern thường được sử dụng để tạo đối tượng khi cần thiết?",
    options: [
      "Lazy initialization",
      "Eager initialization",
      "Static initialization",
      "Dynamic initialization"
    ],
    answer: 0,
    explanation: "Lazy initialization là design pattern thường được sử dụng để tạo đối tượng chỉ khi cần thiết, thay vì tạo ngay khi khởi tạo. Điều này giúp tiết kiệm tài nguyên khi đối tượng tốn nhiều tài nguyên để khởi tạo nhưng không phải lúc nào cũng cần dùng."
  },
  {
    question: "Khái niệm nào mô tả việc một lớp chỉ thực hiện một nhiệm vụ duy nhất?",
    options: [
      "Single Responsibility Principle",
      "Open/Closed Principle",
      "Liskov Substitution Principle",
      "Interface Segregation Principle"
    ],
    answer: 0,
    explanation: "Single Responsibility Principle (Nguyên lý trách nhiệm đơn lẻ) là nguyên lý đầu tiên trong SOLID, mô tả việc một lớp chỉ nên thực hiện một nhiệm vụ duy nhất, có một lý do duy nhất để thay đổi. Điều này giúp code dễ hiểu, dễ bảo trì và dễ mở rộng hơn."
  },
  {
    question: "Trong Java, khái niệm nào mô tả việc sử dụng lại các thuộc tính và phương thức dựa trên mối quan hệ 'has-a'?",
    options: [
      "Composition",
      "Inheritance",
      "Polymorphism",
      "Abstraction"
    ],
    answer: 0,
    explanation: "Composition (thành phần) trong Java mô tả mối quan hệ 'has-a' (có một), trong đó một lớp chứa đối tượng của lớp khác như một thành phần. Ví dụ: Car has-a Engine. Composition thường được ưu tiên hơn kế thừa khi có thể, theo nguyên tắc 'composition over inheritance'."
  },
  {
    question: "Đâu là một thách thức của việc sử dụng tính kế thừa trong Java?",
    options: [
      "Tight coupling giữa lớp cha và lớp con",
      "Không thể truy cập phương thức của lớp cha",
      "Không hỗ trợ đa hình",
      "Tăng kích thước của file .class"
    ],
    answer: 0,
    explanation: "Một thách thức của việc sử dụng tính kế thừa trong Java là tạo ra tight coupling (sự ràng buộc chặt chẽ) giữa lớp cha và lớp con. Khi lớp cha thay đổi, tất cả lớp con đều có thể bị ảnh hưởng, làm cho hệ thống khó bảo trì và mở rộng."
  },
  {
    question: "Trong OOP, khái niệm nào mô tả khả năng thay thế đối tượng của lớp cha bằng đối tượng của lớp con mà không ảnh hưởng đến tính đúng đắn của chương trình?",
    options: [
      "Liskov Substitution Principle",
      "Interface Segregation Principle",
      "Dependency Inversion Principle",
      "Open/Closed Principle"
    ],
    answer: 0,
    explanation: "Liskov Substitution Principle (Nguyên lý thay thế Liskov) là nguyên lý thứ ba trong SOLID, mô tả khả năng thay thế đối tượng của lớp cha bằng đối tượng của lớp con mà không ảnh hưởng đến tính đúng đắn của chương trình. Lớp con phải có thể thay thế lớp cha mà không làm thay đổi hành vi."
  },
  {
    question: "Đâu là cách tốt nhất để triển khai một phương thức chỉ nên được gọi bởi lớp con?",
    options: [
      "Khai báo là protected",
      "Khai báo là public",
      "Khai báo là private",
      "Khai báo là default"
    ],
    answer: 0,
    explanation: "Cách tốt nhất để triển khai một phương thức chỉ nên được gọi bởi lớp con là khai báo phương thức đó với access modifier protected. Điều này cho phép lớp con truy cập phương thức, nhưng ngăn các lớp khác không liên quan truy cập."
  },
  {
    question: "Đâu là mục đích của nguyên lý Open/Closed Principle trong OOP?",
    options: [
      "Lớp nên mở để mở rộng nhưng đóng để sửa đổi",
      "Lớp nên chứa càng ít phương thức càng tốt",
      "Lớp nên có nhiều constructor khác nhau",
      "Lớp nên triển khai nhiều interface"
    ],
    answer: 0,
    explanation: "Mục đích của nguyên lý Open/Closed Principle (Nguyên lý đóng/mở) là: lớp nên mở để mở rộng nhưng đóng để sửa đổi. Điều này có nghĩa là hành vi của một lớp có thể được mở rộng mà không cần sửa đổi mã nguồn của nó, thường thông qua kế thừa hoặc composition."
  },
  {
    question: "Trong Java, khái niệm nào mô tả việc một lớp sử dụng một đối tượng của lớp khác để thực hiện một số chức năng?",
    options: [
      "Delegation",
      "Aggregation",
      "Generalization",
      "Association"
    ],
    answer: 0,
    explanation: "Delegation (ủy quyền) trong Java mô tả việc một lớp sử dụng một đối tượng của lớp khác để thực hiện một số chức năng thay vì tự triển khai. Điều này cho phép tái sử dụng code và tách biệt trách nhiệm, phù hợp với nguyên tắc 'composition over inheritance'."
  }
];
