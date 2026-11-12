const Academy = (() => {
    const exampleCourse = {
        id: 'seguridad-vial',
        title: 'Manejo seguro: seguridad al volante',
        description: 'Principios básicos para una conducción más segura.',
        modules: [
            { title: 'Antes de conducir', type: 'text', content: 'Revisa el estado del vehículo y planifica tu recorrido antes de salir.' },
            { title: 'Identificar riesgos', type: 'text', content: 'Mantén la atención en el entorno y conserva una distancia segura.' },
            { title: 'Los tres impactos', type: 'text', content: 'En una colisión pueden ocurrir el impacto del vehículo, el de los ocupantes y el de los órganos internos.' }
        ]
    };

    function user() {
        const current = JSON.parse(localStorage.getItem('academy_current_user') || 'null');
        const users = JSON.parse(localStorage.getItem('academy_users') || '{}');
        const account = current && users[current.email];
        if (!account || !account.expires_at || Date.parse(account.expires_at) <= Date.now() || Number.isNaN(Date.parse(account.expires_at))) {
            localStorage.removeItem('academy_current_user');
            location.href = 'login.html';
            return null;
        }
        const { password, ...user } = account;
        return { ...user, role: user.role === 'administrador' ? 'administrador' : 'empleado' };
    }

    function courses() {
        return [exampleCourse, ...JSON.parse(localStorage.getItem('academy_courses') || '[]')];
    }

    function progressKey(current, course) {
        return `academy_progress:${current.email}:${course.id}`;
    }

    function progress(current, course) {
        return JSON.parse(localStorage.getItem(progressKey(current, course)) || '[]');
    }

    function complete(current, course, index) {
        const completed = progress(current, course);
        if (!completed.includes(index)) {
            completed.push(index);
            localStorage.setItem(progressKey(current, course), JSON.stringify(completed));
        }
    }

    return { user, courses, progress, complete };
})();
