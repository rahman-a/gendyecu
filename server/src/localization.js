const strings = {
  user: {
    en: {
      require_email: 'Email is Required',
      require_pass: 'Password is Required',
      email_exist: 'E-mail already exist, please choose another one',
      create_account:
        'Your account has been created, A link has been sent to your E-mail, please click on it to verify your E-mail',
      email_verify: 'Pleas Verify Your Email first to login',
      require_data: 'Please Provide The Required Data',
      account_update: 'Account has been Updated',
      pass_isValid: 'Please, write a valid Password',
      old_pass_isValid: "Old Password isn't correct, please write a valid one",
      pass_update: 'Password has been updated',
      no_user: 'No Users Found',
      account_delete: 'Account has been Deleted',
      no_email_account: "This Email isn't connected to any account",
      link_sent: 'The Link has been sent',
      invalid_link: 'This Link is Invalid',
      email_verified: 'Congratulation, Your E-mail has been Verified',
      pass_reset_done: 'Congratulation, Your Password has been Reset',
      wrong_auth: 'invalid login or password',
      email_not_verify: 'please verify your E-mail first',
    },
    ar: {
      require_email: 'من فضلك أدخل البريد الألكترونى',
      require_pass: 'من فضلك أدخل كلمة المرور',
      email_exist: 'هذا البريد الألكترونى موجود بالفعل, من فضل اختر بريد آخر',
      create_account:
        'تم إنشاء الجساب بنجاح, لقد تم ارسال رابط تفعيل البريد الألكترونى الى بريدك الالكترونى, من فضلك اضغط عليه لتفعيل حسابك',
      email_verify: 'من فضلك قم بتفعيل البريد الإلكترونى أولا',
      require_data: 'من فضلك أدخل البيانات المطلوبة',
      account_update: 'تم تحديث بيانات الحساب بنجاح',
      pass_isValid: 'من فضلك أكتب كلمة مرور صحيحة',
      old_pass_isValid:
        'كلمة المرور القديمة غير صحيحة, من فضلك اكتب كلمة مرور صحيحة',
      pass_update: 'تم تحديث كلمة المرور',
      no_user: 'لم يتم العثور على اى مستخدم',
      account_delete: 'تم حذف الجساب بنجاح',
      no_email_account: 'هذا البريد الإلكترونى غير مرتبط باى حساب',
      link_sent: 'تم إرسال الرابط بنجاح',
      invalid_link: 'الرابط غير صالح',
      email_verified: 'تهانينا تم تفعيل البريد الإلكترونى بنجاح',
      pass_reset_done: 'تهانينا تم إعادة ضبط كلمة المرور',
      wrong_auth: 'معلومات الدخول خاطئة, من فضلك حاول مرة آخرى',
      email_not_verify: 'يرجى تفعيل البريد الإلكترونى أولا',
    },
  },
  product: {
    en: {
      product_exist:
        'A Product with that name already exist, please choose another one',
      create_product: 'The Product has created',
      no_product: 'No Product Found',
      product_update: 'Product has been updated',
      image_upload_require: 'Please upload the image',
      image_upload: 'The Image has uploaded successfully',
      no_image: 'No Image Found',
      image_upload_formats:
        'please upload image with following extension png or jpg',
      product_delete: 'has deleted',
      product_require_image: 'Product require at least one image',
      image_delete: 'image has deleted successfully',
      item_add: 'Item has been added to the cart',
      no_item: 'No Item Found',
      item_delete: 'Item has been removed to the cart',
      cart_empty: 'No Items Found in the Cart',
      cart_clear: 'Cart has been cleared',
      no_order: 'No Orders History to Display',
      order_update: 'The Order has been updated',
      already_wishlist: 'You Already Add this Item to Wishlist',
      wishlist_add: 'The Item has been added to Wishlist',
    },
    ar: {
      product_exist: 'إسم المنتج موجود بالفعل, من فضلك إختر اسم آخر',
      create_product: 'تم إنشاء المنتج بنجاح',
      no_product: 'لم يتم العثور على أى منتج',
      product_update: 'تم تحديث بيانات المنتج بنجاح',
      image_upload_require: 'من فضلك قم برفع الصورة',
      image_upload: 'تم رفع الصورة بنجاح',
      no_image: 'لم يتم العثور على أى صورة',
      image_delete: 'تم حذف الصورة بنجاح',
      product_require_image: 'المنتج يجب أن يحتوى على صورة واحدة على الأقل',
      image_upload_formats: 'png او jpg من فضلك ارفع الصور بامتداد',
      product_delete: 'تم حذفه بنجاح',
      item_add: 'تم أضافة المنتج فى عربة التسوق',
      no_item: 'لم يتم العثور على اى منتج',
      item_delete: 'تم حذف المنتج من عربة التسوق',
      cart_empty: 'عربة التسوق خالية',
      cart_clear: 'تم إخلاء عربة التسوق',
      no_order: 'لم يتم العثور على أى طلبات سابقة',
      order_update: 'تم تحديث بيانات الطلب',
      already_wishlist: 'المنتج موجود بالفعل فى قائمة التفضيلات',
      wishlist_add: 'تم إضافة المنتج فى قائمة التفضيلات',
    },
  },
  course: {
    en: {
      course_create: 'The Course has been Created',
      no_course: 'No Course Found',
      not_enrolled: 'Not Enrolled in Any Course Yet',
      course_update: 'Course has been Updated',
      course_delete: 'The Course has been Deleted',
      ann_create: 'The Announcement has been created',
      no_ann: 'No Announcements Found',
      ann_update: 'Announcement has been Updated',
      ann_delete: 'The Announcement has been deleted',
      no_ann_comment: "Comment can't be added because No Announcement Found",
      already_ann_comment: 'You Already commented on this Announcement',
      add_ann_comment: 'The Comment has been added',
      no_ann_comments_add: 'No Comments have been added yet',
      end_ann_comments: 'End of Comments',
      no_comments: 'No Comments Found',
      comment_delete: 'Comment has been Deleted',
      chapter_title_exist:
        'Chapter Title already exist, please choose another title',
      chapter_create: 'The Chapter has been created',
      no_chapters: 'No Chapters Found',
      no_course_chapters: 'No Chapters Found for this course',
      chapter_update: 'Chapter has been updated',
      chapter_delete: 'Chapter has been deleted',
      lesson_title_exist:
        'Lesson title already exist, please choose another title',
      lesson_create: 'The Lesson has been created',
      no_lesson: 'No Lesson Found',
      lesson_update: 'Lesson has been updated',
      lesson_delete: 'The Lesson has been deleted',
      already_enrolled: 'You already Enrolled in this Course',
      new_enroll: 'Congratulation for Enrolling in this Course',
      no_enroll: 'No Enrollment Found',
      no_course_enroll: 'You not Enrolled in this course',
      lesson_complete: 'The Lesson Already Completed',
      instructor_exist: 'This instructor already exist',
      instructor_add: 'The Instructor has been added',
      no_instructor: 'No Instructor Found',
      instructor_update: 'Instructor has been Updated',
      instructor_delete: 'The Instructor has been Deleted',
      review_no_instructor: "Review can't be added because No instructor Found",
      already_review: 'You Already reviewed the instructor',
      review_add: 'The Review has been added',
      end_reviews: 'End of Reviews',
      delete_review: 'Review has been Deleted',
      note_choose_lesson: 'Please Choose a lesson before creating a note',
      note_create: 'Note has been created',
      no_note: 'No Note Found',
      note_update: 'The Note has been updated',
      no_notes: 'No Notes Found',
      note_delete: 'The Note has been removed',
      already_reviewed: 'You already reviewed this course',
      no_reviews: 'No Reviews has been Added yet',
      review_update: 'Review has been Updated',
      review_delete: 'Review has been Deleted',
      coupon_exist: 'You already Created a Coupon with that code',
      coupon_create: 'The Coupon has been created',
      coupon_not_valid: 'Coupon Not Valid',
      coupon_expired: 'Coupon Expired',
      no_coupon: 'No Coupon Found',
      coupon_update: 'Coupon has been Updated',
      coupon_delete: 'Coupon has been Deleted',
      valid_coupon: 'Coupon has Marked as Valid',
      not_valid_coupon: 'Coupon has Marked as Invalid',
    },
    ar: {
      course_create: 'تم إنشاء الدورة التدريبية بنجاح',
      no_course: 'لم يتم العثور على أى دورات تدريبية',
      not_enrolled: 'غير مسجل فى اى دورة تدريبية',
      course_update: 'تم تحديث بيانات الدورة التدريبية',
      course_delete: 'تم حذف الدورة التدريبية بنجاح',
      ann_create: 'تم إنشاء الإشعار بنجاح',
      no_ann: 'لم يتم العثور على اى اشعارات',
      ann_update: 'تم تحديث بيانات الإشعار',
      ann_delete: 'تم حذف الإشعار بنجاح',
      no_ann_comment: 'لا يمكن إضافة التعليق على إشعار غير موجود',
      already_ann_comment: 'لقد أضفت تعليق بالفعل على هذا الإشعار',
      add_ann_comment: 'تم إضافة التعليق',
      no_ann_comments_add: 'لم يتم إضافة اى تعليقات',
      end_ann_comments: 'نهاية التعليقات',
      no_comments: 'لم يتم العثور على اى تعليقات',
      comment_delete: 'تم حذف التعليق بنجاح',
      chapter_title_exist: 'عنوان الفصل موجود بالفعل, من فضلك اختر عنوان آخر',
      chapter_create: 'تم إنشاء الفصل بنجاح',
      no_chapters: 'لم يتم العثور على اى فصول',
      no_course_chapters: 'لم يتم العثور على فصول للدروة التدريبية',
      chapter_update: 'تم تحديث بيانات الفصل بنجاح',
      chapter_delete: 'تم حذف الفصل بنجاح',
      lesson_title_exist: 'عنوان الدرس موجود بالفعل, من فضلك إختر عنوان آخر',
      lesson_create: 'تم إنشاء الدرس بنجاح',
      no_lesson: 'لم يتم العثور على اى دروس',
      lesson_update: 'تم تحديث بيانات الدرس',
      lesson_delete: 'تم حذف الدرس بنجاح',
      already_enrolled: 'أنت مسجل بالفعل فى هذة الدورة التدريبية',
      new_enroll: 'تهانينا, انت الآن مسجل فى الدورة التدريبية',
      no_enroll: 'لم يتم العثور على تسجيل فى اى دورة تدريبية',
      no_course_enroll: 'لست مسجل فى هذة الدورة التدريبية',
      lesson_complete: 'الفصل بالفعل مكتمل',
      instructor_exist: 'المدرب بالفعل موجود',
      instructor_add: 'تم أضافة المدرب بنجاح',
      no_instructor: 'لم يتم العثور على اى مدرب',
      instructor_update: 'تم تحديث بيانات المدرب',
      instructor_delete: 'تم حذف بيانات المدرب بنجاح',
      review_no_instructor: 'لا يمكن اضافة تقييم لمدرب غير موجود',
      already_review: 'بالفعل اضفت تقييم لهذا المدرب',
      end_reviews: 'نهاية التقييمات',
      delete_review: 'تم حذف التقييم بنجاح',
      note_choose_lesson: 'من فضلك أختر الفصل قبل إنشاء الملاحظة',
      note_create: 'تم إنشاء الملاحظة بنجاح',
      no_note: 'لم يتم العثور على اى ملاحظة',
      note_update: 'تم تحديث الملاحظة بنجاح',
      no_notes: 'لم يتم العثور على اى ملاحظات',
      note_delete: 'تم حذف الملاحظة بنجاح',
      already_reviewed: 'لقد قيمت هذه الدورة التدريبية بالفعل',
      review_add: 'تم إضافة التقييم بنجاح',
      no_reviews: 'لم يتم العثور على اى تقييمات',
      review_update: 'تم تحديث التقييم بنجاح',
      review_delete: 'تم حذف التقييم بنجاح',
      coupon_exist: 'هذا الكود موجود بالفعل, من فضلك اختر كود آخر',
      coupon_create: 'تم إنشاء الكوبون بنجاح',
      no_coupon: 'لم يتم العثور على اى كوبون',
      coupon_not_valid: 'الكوبون غير صالح',
      coupon_expired: 'انتهت صلاحية الكوبون',
      coupon_update: 'تم تحديث بيانات الكوبون',
      coupon_delete: 'تم حذف الكوبون بنجاح',
      valid_coupon: 'الكوبون اصبح صالح للإستخدام',
      not_valid_coupon: 'الكوبون اصبح غير صالح للإستخدام',
    },
  },
  blog: {
    en: {
      blog_exist:
        'A Blog with that name already exist, please choose another one',
      blog_create: 'The Blog has been created',
      no_blogs: 'No Blogs Found',
      no_blog: 'No Blog Found',
      blog_update: 'Blog has been updated',
      blog_delete: 'Blog has been deleted',
      comment_no_blog: "Comment can't be added because No blog Found",
      already_comment_blog: 'You Already commented on this Blog',
      blog_comment_add: 'The Comment has been added',
      blog_no_comments: 'No Comments have been added yet',
      blog_end_comments: 'End if comments',
      blog_comment_delete: 'Comment has been Deleted',
    },
    ar: {
      blog_exist: 'عنوان المدونة موجود, من فضلك اختر عنوان آخر',
      blog_create: 'تم إنشاء المدونة بنجاح',
      no_blogs: 'لم يتم العثور على اى مدونات',
      no_blog: 'لم يتم العثور على المدونة',
      blog_update: 'تم تحديث المدونة بنجاح',
      blog_delete: 'تم حذف المدونة بنجاح',
      comment_no_blog: 'لا يمكن اضافة تعليق لمدونة غير موجودة',
      already_comment_blog: 'لقد علقت على هذة المدونة بالفعل',
      blog_comment_add: 'تم اضافة التعليق بنجاح',
      blog_no_comments: 'لم يتم اضافة تعليقات',
      blog_end_comments: 'نهاية التعليقات',
      blog_comment_delete: 'تم حذف التعليق بنجاح',
    },
  },
  contact: {
    en: {
      contact_sent: 'Your Message has been sent',
      no_contacts: 'No Contacts Found',
      no_contact: 'No Contact Found',
      read_contact: 'Contact has Marked as Read',
      no_read_contact: 'contact has Marked as Not Read',
      contact_delete: 'The Contact has been Deleted',
      already_booked: 'You already Booked a Call',
      booked_call: 'The Call has been Booked, wait for response',
      no_calls_booked: 'No Calls has been Booked yet',
      no_call: 'No Call Found',
      done_call: 'Call has Marked as Done',
      active_call: 'Call has Marked as Active',
      call_delete: 'The Call has been Deleted',
    },
    ar: {
      contact_sent: 'تم إرسال الرسالة بنجاح',
      no_contacts: 'لم يتم العثور على اى رسالة',
      no_contact: 'لم يتم العثور على الرسالة',
      read_contact: 'تم قراءة الرسالة',
      no_read_contact: 'رسالة غير مقروءة',
      contact_delete: 'تم حذف الرسالة بنجاح',
      already_booked: 'لقد حجزت المكالمة من قبل',
      booked_call: 'تم حجز المكالمة بنجاح, نرجو الانتظار',
      no_calls_booked: 'لم يتم حجز مكالمات بعد',
      no_call: 'لم يتم العثور على اى مكالمات',
      done_call: 'تم الانتهاء من الحجز',
      active_call: 'تم تفعيل الحجز',
      call_delete: 'تم حذف الحجز بنجاح',
    },
  },
  auth: {
    en: {
      log_first: 'Please Login First',
      not_auth: 'Not Authorized',
      valid_api_key: 'Please Provide A valid Api Key',
      not_auth_api: 'NOT Authorized to Access the API',
    },
    ar: {
      log_first: 'من فضلك سجل دخول اولاً',
      not_auth: 'غير مسموح',
      valid_api_key: 'كود API غير صالح',
      not_auth_api: 'غير مصرح لإستخدام API',
    },
  },
}

export default strings
