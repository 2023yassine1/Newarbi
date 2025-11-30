/**
 * APP_TRANSLATIONS
 * قاموس الترجمة المستخدم في تطبيق Molino Pro.
 * يحتوي على ثلاثة لغات: العربية (ar), الإنجليزية (en), والفرنسية (fr).
 */
const APP_TRANSLATIONS = {
    
    // --- الفرنسية (Français) - لغة التطبيق الافتراضية ---
    fr: {
        app_title: "Molino Pro - Système de Gestion des Silos",
        app_subtitle: "Système de gestion intelligent",
        
        // المصادقة
        email_placeholder: "Email",
        password_placeholder: "Mot de passe",
        btn_enter: "Entrer",
        btn_register: "Créer un compte",
        toggle_auth_login: "Basculer (Connexion / Inscription)",
        toggle_auth_register: "Basculer (Inscription / Connexion)",
        msg_connecting: "Connexion en cours...",

        // التنبيهات
        msg_confirm_delete: "Êtes-vous sûr de vouloir supprimer cet enregistrement?",
        msg_confirm_finish: "Terminer la session et sauvegarder le rapport?",
        msg_no_data: "Aucune donnée à enregistrer.",
        msg_no_permission: "Vous n'êtes pas autorisé à modifier les réglages.",
        msg_saved: "Les réglages des capacités de silo ont été sauvegardés avec succès.",
        msg_full_imminent: "Remplissage imminent",
        err_capacity: "Erreur: Le poids ne peut pas dépasser la capacité maximale du silo",
        err_date_logic: "Erreur logique: الوقت الجديد لا يمكن أن يكون قبل آخر تسجيل.",
        msg_admin_only: "Ces réglages sont réservés à l'Administrateur (Admin Only).",
        msg_no_activity: "Aucune activité enregistrée pour analyse.",
        msg_start_recording: "Enregistrer des lectures pour l'analyse",
        msg_no_history: "Aucun enregistrement d'historique trouvé.",
        msg_no_details: "Aucun détail sauvegardé.",


        // شريط التنقل الرئيسي
        nav_dashboard: "Surveillance",
        nav_reports: "Rapports",
        nav_archive: "Archive",
        nav_settings: "Réglages",
        
        // لوحة القيادة (Dashboard)
        title_new_entry: "Enregistrer une nouvelle lecture",
        label_silo: "Silo",
        label_weight: "Poids (T)",
        label_date: "Date et heure",
        btn_record: "Enregistrer",
        title_session_log: "Journal de la session actuelle",
        th_time: "Heure",
        th_silo: "Silo",
        th_weight: "Poids",
        th_diff: "Différence",
        btn_finish: "Terminer et Sauvegarder",
        btn_analyze: "Analyse Graphique",

        // التقارير (Analysis)
        title_instant_report: "Rapport Instantané",
        stat_status: "Statut Général",
        status_waiting: "En attente...",
        status_active: "Actif",
        status_inactive: "Inactif",
        stat_total_moved: "Mouvement Total (T)",
        stat_max_speed: "Vitesse Max",
        title_speed_details: "Détails des Vitesses",
        th_activity: "Activité",
        status_filling: "Remplissage",
        status_emptying: "Vidange",
        eta_full: "Sera plein dans",
        eta_empty: "Sera vide dans",
        chart_evolution: "Évolution du Poids",
        chart_rate: "Taux de Changement",

        // الأرشيف (History)
        title_archive: "Archive et Historique",
        btn_refresh: "Actualiser",
        th_date: "Date",
        th_total_moved: "Total Mouvement",
        th_count: "Nb. Lectures",
        th_actions: "Actions",
        btn_view_report: "Voir Rapport",
        title_report_details: "Détails du Rapport",
        label_total: "Total",
        label_details: "Détails",

        // الإعدادات (Settings)
        title_language: "Langue de l'interface",
        title_silo_settings: "Réglages des Capacités des Silos",
        label_rated: "Nominale",
        label_max: "Max",
        btn_save_settings: "Sauvegarder les Réglages"
    },

    // --- الإنجليزية (English) ---
    en: {
        app_title: "Molino Pro - Silo Management System",
        app_subtitle: "Smart Management System",
        
        // المصادقة
        email_placeholder: "Email",
        password_placeholder: "Password",
        btn_enter: "Login",
        btn_register: "Register",
        toggle_auth_login: "Switch (Login / Register)",
        toggle_auth_register: "Switch (Register / Login)",
        msg_connecting: "Connecting...",

        // التنبيهات
        msg_confirm_delete: "Are you sure you want to delete this record?",
        msg_confirm_finish: "End session and save report?",
        msg_no_data: "No data to save.",
        msg_no_permission: "You are not authorized to modify settings.",
        msg_saved: "Silo capacity settings saved successfully.",
        msg_full_imminent: "Filling imminent",
        err_capacity: "Error: Weight cannot exceed maximum silo capacity",
        err_date_logic: "Logical Error: New time cannot be before the last recorded time.",
        msg_admin_only: "These settings are reserved for the Administrator (Admin Only).",
        msg_no_activity: "No activity recorded for analysis.",
        msg_start_recording: "Record readings for analysis",
        msg_no_history: "No history records found.",
        msg_no_details: "No details saved.",
        
        // شريط التنقل الرئيسي
        nav_dashboard: "Monitoring",
        nav_reports: "Reports",
        nav_archive: "Archive",
        nav_settings: "Settings",
        
        // لوحة القيادة (Dashboard)
        title_new_entry: "Record New Reading",
        label_silo: "Silo",
        label_weight: "Weight (T)",
        label_date: "Date and Time",
        btn_record: "Record",
        title_session_log: "Current Session Log",
        th_time: "Time",
        th_silo: "Silo",
        th_weight: "Weight",
        th_diff: "Difference",
        btn_finish: "End and Save",
        btn_analyze: "Graphic Analysis",

        // التقارير (Analysis)
        title_instant_report: "Instant Report",
        stat_status: "General Status",
        status_waiting: "Waiting...",
        status_active: "Active",
        status_inactive: "Inactive",
        stat_total_moved: "Total Movement (T)",
        stat_max_speed: "Max Speed",
        title_speed_details: "Speed Details",
        th_activity: "Activity",
        status_filling: "Filling",
        status_emptying: "Emptying",
        eta_full: "Will be full in",
        eta_empty: "Will be empty in",
        chart_evolution: "Weight Evolution",
        chart_rate: "Rate of Change",

        // الأرشيف (History)
        title_archive: "Archive and History",
        btn_refresh: "Refresh",
        th_date: "Date",
        th_total_moved: "Total Movement",
        th_count: "No. Readings",
        th_actions: "Actions",
        btn_view_report: "View Report",
        title_report_details: "Report Details",
        label_total: "Total",
        label_details: "Details",

        // الإعدادات (Settings)
        title_language: "Interface Language",
        title_silo_settings: "Silo Capacity Settings",
        label_rated: "Rated",
        label_max: "Max",
        btn_save_settings: "Save Settings"
    },

    // --- العربية (Arabic) ---
    ar: {
        app_title: "مولينو برو - نظام إدارة الصوامع",
        app_subtitle: "نظام إدارة المطاحن الذكي",
        
        // المصادقة
        email_placeholder: "البريد الإلكتروني",
        password_placeholder: "كلمة المرور",
        btn_enter: "دخول",
        btn_register: "إنشاء حساب",
        toggle_auth_login: "تبديل (دخول / تسجيل)",
        toggle_auth_register: "تبديل (تسجيل / دخول)",
        msg_connecting: "جارٍ الاتصال...",

        // التنبيهات
        msg_confirm_delete: "هل أنت متأكد من رغبتك في حذف هذا التسجيل؟",
        msg_confirm_finish: "إنهاء الجلسة وحفظ التقرير؟",
        msg_no_data: "لا توجد بيانات لحفظها.",
        msg_no_permission: "ليس لديك صلاحية لتعديل الإعدادات.",
        msg_saved: "تم حفظ إعدادات سعات الصوامع بنجاح.",
        msg_full_imminent: "قرب الامتلاء",
        err_capacity: "خطأ: لا يمكن أن يتجاوز الوزن السعة القصوى للصومعة",
        err_date_logic: "خطأ منطقي: لا يمكن أن يكون الوقت الجديد قبل آخر تسجيل.",
        msg_admin_only: "هذه الإعدادات مخصصة للمسؤول فقط (Admin Only).",
        msg_no_activity: "لم يتم تسجيل أي نشاط للتحليل.",
        msg_start_recording: "سجل قراءات للتحليل",
        msg_no_history: "لم يتم العثور على سجلات تاريخية.",
        msg_no_details: "لم يتم حفظ تفاصيل.",
        
        // شريط التنقل الرئيسي
        nav_dashboard: "المراقبة",
        nav_reports: "التقارير",
        nav_archive: "الأرشيف",
        nav_settings: "الإعدادات",
        
        // لوحة القيادة (Dashboard)
        title_new_entry: "تسجيل قراءة جديدة",
        label_silo: "الصومعة",
        label_weight: "الوزن (ط)",
        label_date: "التاريخ والوقت",
        btn_record: "تسجيل",
        title_session_log: "سجل الجلسة الحالية",
        th_time: "الوقت",
        th_silo: "الصومعة",
        th_weight: "الوزن",
        th_diff: "الفرق",
        btn_finish: "إنهاء وحفظ",
        btn_analyze: "تحليل بياني",

        // التقارير (Analysis)
        title_instant_report: "تقرير فوري",
        stat_status: "الحالة العامة",
        status_waiting: "في الانتظار...",
        status_active: "نشط",
        status_inactive: "خامل",
        stat_total_moved: "إجمالي الحركة (ط)",
        stat_max_speed: "أقصى سرعة",
        title_speed_details: "تفاصيل السرعات",
        th_activity: "النشاط",
        status_filling: "تعبئة",
        status_emptying: "تفريغ",
        eta_full: "سيمتلئ خلال",
        eta_empty: "سيفرغ خلال",
        chart_evolution: "تطور الوزن",
        chart_rate: "معدل التغيير",

        // الأرشيف (History)
        title_archive: "الأرشيف والتاريخ",
        btn_refresh: "تحديث",
        th_date: "التاريخ",
        th_total_moved: "إجمالي الحركة",
        th_count: "عدد القراءات",
        th_actions: "الإجراءات",
        btn_view_report: "عرض التقرير",
        title_report_details: "تفاصيل التقرير",
        label_total: "الإجمالي",
        label_details: "التفاصيل",

        // الإعدادات (Settings)
        title_language: "لغة الواجهة",
        title_silo_settings: "إعدادات سعات الصوامع",
        label_rated: "الاسمية",
        label_max: "القصوى",
        btn_save_settings: "حفظ الإعدادات"
    }
};
