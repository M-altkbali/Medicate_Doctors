// $(window).scroll(function () {

//     var scroll = $(window).scrollTop();



//     if (scroll >= 100) {

//         $(".top-nav").addClass("light-header");

//     } else {

//         $(".top-nav").removeClass("light-header");

//     }

// });





// $(function () {

//     var theYear = new Date().getFullYear();

//     $('#year').html(theYear);

// });





var arrLang = {

    'en': {

        'arabic': 'Arabic',
        'english': 'English',
        'search': 'Search',

        'doctors': 'Doctors',
        'medicins': 'Medicins',
        'sirvices_provider': 'Sirvices provider',
        'doctors_appointment': 'Doctors appointment',
        'add': 'Add',
        'update': 'Update',
        'delete': 'Delete',
        'dental_clinic': 'Dental clinic',
        'residential_clinic': 'Residential clinic',
        'non-residential_clinic': 'Non-residential clinic',
        'pharmacy': 'Pharmacy',
        'analysis_center': 'Analysis center',
        'diagnostic_center': 'Diagnostic center',

        'add_doctor': 'Add doctor',
        'specialization': 'Specialization',
        'doc_name': 'Doctor name',
        'degree': 'Degree',
        'select': ' Select ..',
        'save': 'Save',
        'cancel': 'Cancel',

        'update_doctor': 'Update Doctor',
        'update_delete': 'Update / Delete',

        'medicate_doctor': 'Medicate doctor',
        'id': 'ID',

        'add_medicine': 'Add medicine',
        'medicine_name': 'Medical name',
        'concentration': 'Concentration',
        'pharma_form': 'Pharmacological form',
        'type_medication': 'The type of medication',

        'update_medicine': 'Update medicine',


        'to': 'To',
        'from': 'From',
        'satur': 'Saturday',
        'sun': 'Sunday',
        'mon': 'Monday',
        'tues': 'Tuesday',
        'wednes': 'Wednesday',
        'thurs': 'Thursday',
        'fri': 'Friday',
        'clin_name': 'Clinic name',
        'add_appo_doc': 'Add appointment Doctor',
        'Detec_price': 'Detection price',



        'medical_file': 'Medical file',
        'previous_checks': 'Previous checks',
        'treatment_plan': 'Treatment plan',
        'test_results': 'Test results',
        'radiology_results': 'Radiology results',
        'medical_reports': 'Medical reports',
        'vital_modifiers': 'Vital modifiers',
        'blood_pressure': 'Blood pressure',
        'respiratory_rate': 'Respiratory rate',
        'pulse_rate': 'Pulse rate',
        'blood_type': 'Blood type',
        'the_weight': 'The weight',
        'length': 'Length',

        'regular_habits': 'Regular habits',
        'eat_fruits': 'Eat fruits',
        'eat_vegetables': 'Eat vegetables',
        'eating_meat': 'Eating meat',
        'drinks_alcohol': 'Drinks alcohol',
        'notes': 'Notes',
        'cigarette': 'Cigarette',
        'Effort_at_work': 'Effort at work',
        'exercise_on_the_go': 'Exercise on the go',
        'effort_during_holidays': 'The effort during the holidays',
        'patient_data': 'Patient Data',
        
        
        
        'name': 'Name', 
        'date': 'Date',
        'gender': 'Gender',
        'female': 'Female',
        'male': 'Male',
        'job': 'Job',
        'insurance': 'Insurance',
        'nationality': 'Nationality',
        'libyan': 'Libyan',
        'tunisian':'Tunisian',
        'egyptian':'Egyptian',
        'iraqi':'Iraqi',
        'smokes':'Smokes',
        'drugs':'Drugs',
        'high':'High',
        'medium':'Medium',
        'low':'Low',
        'The_effort_during':'The effort during the holidays',
        'sensitivity':'Sensitivity',
        'penicillin':'Penicillin',
        'current_medications':'Current medications',
        'iron_deficiency_anaemia':'Iron deficiency anaemia',
        'chronic_diseases':'Chronic diseases',
        'family_diseases':'Family diseases',
        'vaccinations':'Vaccinations',
        'Serious_and_previous':'Serious diseases and previous surgeries',
        '':'',
        '':'',
        '':'',
        '':'',
        '':'',
        '':'',
        '':'',
        '':'',
        '':'',
        '':'',


    },

    'ar': {



        'arabic': 'عربي',
        'english': 'English',
        'search': 'بحث',

        'doctors': 'الـطباء',
        'medicins': 'الأدوية',
        'sirvices_provider': 'مزودي الخدمة',
        'doctors_appointment': 'مواعيد الأطباء',
        'add': 'إضافة',
        'update': 'تعديل',
        'delete': 'حذف',
        'dental_clinic': 'عيادة أسنان',
        'residential_clinic': 'عيادة ايوائية',
        'non-residential_clinic': 'عيادة غير ايوائية',
        'pharmacy': 'طيدلية',
        'analysis_center': 'مركز تحليل',
        'diagnostic_center': 'مركز تشخيص',

        'add_doctor': 'إضافة طبيب',
        'specialization': 'التخصص',
        'doc_name': 'إسم الطبيب',
        'degree': 'الدرجة العلمية',
        'select': 'اختر ..',
        'save': 'حفظ',
        'cancel': 'إلغاء',

        'update_doctor': 'تعديل بيانات طبيب',
        'update_delete': 'تعديل / حذف',

        'medicate_doctor': 'أطباء ميديكيت',
        'id': 'الرقم',

        'add_medicine': 'إضافة دواء',
        'medicine_name': 'الاسم الدوائي',
        'concentration': 'التركيز',
        'pharma_form': 'الشكل الدوائي',
        'type_medication': 'نوع الدواء',
        'update_medicine': 'تعديل الدواء',


        'to': 'الى',
        'from': 'من',
        'satur': 'السبت',
        'sun': 'الأحد',
        'mon': 'الاثنين',
        'tues': 'الثلاثاء',
        'wednes': 'الاربعاء',
        'thurs': 'الخميس',
        'fri': 'الجمعة',
        'clin_name': 'اسم المصحة',
        'add_appo_doc': 'إضافة مواعيد الطبيب',
        'Detec_price': 'سعر الكشف',


        'medical_file': 'ملف طبي',
        'previous_checks': 'الكشوفات السابقة',
        'treatment_plan': 'خطة علاجية',
        'test_results': 'نتائج الإختبار',
        'radiology_results': 'نتائج الأشعة',
        'medical_reports': 'التقارير الطبية',
        'vital_modifiers': 'المعدلات الحيوية',
        'blood_pressure': 'ضغط الدم',
        'respiratory_rate': 'معدل التنفس',
        'pulse_rate': 'معدل النبض',
        'blood_type': 'فصيلة الدم',
        'the_weight': 'الوزن',
        'length': 'طول',

        'regular_habits': 'عادات منتظمة',
        'eat_fruits': 'تناول الفاكهة',
        'eat_vegetables': 'تناول الخضروات',
        'eating_meat': 'اكل اللحوم',
        'drinks_alcohol': 'يشرب الكحول',
        'notes': 'ملاحظات',
        'cigarette': 'سيجارة',
        'Effort_at_work': 'الجهد في العمل',
        'exercise_on_the_go': 'تمرن أثناء التنقل',
        'effort_during_holidays': 'الجهد خلال الإجازات',
        'patient_data': 'بيانات المريض',



        'name': 'الاسم', 
        'date': 'تايخ الميلاد',
        'gender': 'الجنس',
        'female': 'أنثى',
        'male': 'ذكر',
        'job': 'الهنة',
        'insurance': 'التأمين',
        'nationality': 'الجنسية',
        'libyan': 'ليبي',
        'tunisian':'تونسي',
        'egyptian':'مصري',
        'iraqi':'عراقي',
        'smokes':'تدخين',
        'drugs':'المخدرات',
        'high':'عالي',
        'medium':'متوسط',
        'low':'منخفظ',
        'The_effort_during':'الجهد خلال الإجازات',
        'sensitivity':'حساسية',
        'current_medications':'الأدوية الحالية',
        'chronic_diseases':'الأمراض المزمنة',
        'family_diseases':'أمراض الأسرة',
        'vaccinations':'التطعيمات',
        'Serious_and_previous':'الأمراض الخطيرة والعمليات الجراحية السابقة',
    }

};


$(function () {

    $('.translatear').click(function () {

        var lang = $(this).attr('id');

        ($(this).attr("id") == "ar")

        $('*').each(function (index) {

            $(this).text(arrLang[lang][$(this).attr('key')]);
            document.getElementById("dir").style.direction = "rtl";

        });


    });

    $('.translateen').click(function () {

        var lang = $(this).attr('id');
       

        ($(this).attr("id") == "en")

        $('*').each(function (index) {


            
            $(this).text(arrLang[lang][$(this).attr('key')]);
            document.getElementById("dir").style.direction = "ltr";
            console.log("شن صاير فيك");
        });

    });

});



