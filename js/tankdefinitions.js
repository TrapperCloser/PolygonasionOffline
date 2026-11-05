// Tank Class Definitions
// Tier 1 : Basic
// Tier 2 : Twin, Machine Gunner, Sniper, Flank Guard
// Tier 3 : Triplet, Twin Double, Hexa, Triangle
// Tier 4 : Pentashot, Octo, Booster
//   shape: 'rect'     -> normal rectangular barrel
//   shape: 'triangle' -> 3-sided triangle barrel (half of it sits behind the body)
//   angle       = barrel offset from the tank facing direction (radians)
//   offsetX/Y   = barrel position on the body (local space)
//   spread      = random bullet spread in radians (0 = perfect accuracy)
//   barrelDelay = ms to wait before this barrel fires after the tank fires
//   knockback   = per-bullet recoil impulse (px)
//   zoom        = camera scale (1 = normal, < 1 = wider FOV / zoomed out)

const TankDefinitions = {
    Basic: {
        name: "Basic",
        tier: 1,
        children: ["Twin", "MachineGunner", "Sniper", "Flank Guard", "Auto-Tank"],
        body: {
            radius: 32,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3
        },
        barrels: [
            {
                shape: 'rect',
                angle: 0,
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0,
                knockback: 1.2
            }
        ],
        stats: {
            damage: 10,
            hpRegen: 0.1,
            maxHp: 100,
            bulletSpeed: 10,
            bulletPenetration: 1,
            bulletReload: 10,
            bulletDamage: 10,
            maxMovementSpeed: 5
            
        },
        bullet: {
            radius: 13,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3,
            speed: 10,
            life: 140
        },
        zoom: 1
    },

    //TIER 2 TANKS

    Twin: {
        name: "Twin",
        tier: 2,
        children: ["Triplet", "Twin Double"],
        body: {
            radius: 32,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3
        },
        barrels: [
            {
                shape: 'rect',
                angle: 0,
                offsetX: 0,
                offsetY: -15,
                length: 50,
                width: 25,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0,
                knockback: 0.6
            },
            {
                shape: 'rect',
                angle: 0,
                offsetX: 0,
                offsetY: 15,
                length: 50,
                width: 25,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 100,
                knockback: 0.6
            }
        ],
        stats: {
            damage: 10,
            hpRegen: 0.1,
            maxHp: 100,
            bulletSpeed: 10,
            bulletPenetration: 1,
            bulletReload: 10,
            bulletDamage: 7,
            maxMovementSpeed: 5
        },
        bullet: {
            radius: 11,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3,
            speed: 10,
            life: 140
        },
        zoom: 1
    },

    MachineGunner: {
        name: "Machine Gunner",
        tier: 2,
        children: [],
        body: {
            radius: 32,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3
        },
        barrels: [
            {
                shape: 'triangle',
                angle: 0,
                offsetX: 0,
                offsetY: 0,
                length: 30,
                width: 50,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0.18,
                barrelDelay: 0,
                knockback: 0.4
            }
        ],
        stats: {
            damage: 10,
            hpRegen: 0.1,
            maxHp: 100,
            bulletSpeed: 12,
            bulletPenetration: 1,
            bulletReload: 3,
            bulletDamage: 5,
            maxMovementSpeed: 4.8
        },
        bullet: {
            radius: 13,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3,
            speed: 12,
            life: 90
        },
        zoom: 1
    },

    Sniper: {
        name: "Sniper",
        tier: 2,
        children: [],
        body: {
            radius: 32,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3
        },
        barrels: [
            {
                shape: 'rect',
                angle: 0,
                offsetX: 0,
                offsetY: 0,
                length: 78,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0,
                knockback: 3.0
            }
        ],
        stats: {
            damage: 10,
            hpRegen: 0.1,
            maxHp: 100,
            bulletSpeed: 16,
            bulletPenetration: 2,
            bulletReload: 24,
            bulletDamage: 25,
            maxMovementSpeed: 4.6
        },
        bullet: {
            radius: 13,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3,
            speed: 16,
            life: 240
        },
        zoom: 0.85
    },

    "Flank Guard": {
        name: "Flank Guard",
        tier: 2,
        children: ["Hexa", "Triangle"],
        body: {
            radius: 32,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3
        },
        barrels: [
            {
                shape: 'rect',
                angle: 0,
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0,
                knockback: 0.4
            },
            {
                shape: 'rect',
                angle: 120 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 100,
                knockback: 0.4
            },
            {
                shape: 'rect',
                angle: -120 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 100,
                knockback: 0.4
            }
        ],
        stats: {
            damage: 10,
            hpRegen: 0.1,
            maxHp: 100,
            bulletSpeed: 10,
            bulletPenetration: 1,
            bulletReload: 10,
            bulletDamage: 8,
            maxMovementSpeed: 5
        },
        bullet: {
            radius: 11,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3,
            speed: 10,
            life: 140
        },
        zoom: 1
    },

    "Auto-Tank": {
        name: "Auto Tank",
        tier: 2,
        children: ["Triple Auto-Tank"],
        body: {
            radius: 32,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3
        },
        barrels: [
            {
                shape: 'rect',
                angle: 0,
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0,
                knockback: 1.0
            }
        ],
        stats: {
            damage: 10,
            hpRegen: 0.1,
            maxHp: 100,
            bulletSpeed: 10,
            bulletPenetration: 1,
            bulletReload: 10,
            bulletDamage: 8,
            maxMovementSpeed: 5
        },
        bullet: {
            radius: 11,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3,
            speed: 10,
            life: 140
        },
        turrets: [
            {
                offsetX: 0,
                offsetY: 0,
                angle: (Math.PI / 180),
                body: {
                    radius: 16,
                    color: '#a0a0a0',
                    outline: '#646464',
                    outlineWidth: 2.5
                },
                barrels: [
                    {
                        shape: 'rect',
                        angle: 0,
                        offsetX: 0,
                        offsetY: 0,
                        length: 24,
                        width: 14,
                        color: '#969696',
                        outline: '#616161',
                        outlineWidth: 2.5,
                        tipColor: '#33333300',
                        spread: 0,
                        barrelDelay: 0,
                        knockback: 0.3
                    }
                ],
                stats: {
                    bulletSpeed: 10,
                    bulletPenetration: 1,
                    bulletReload: 12,
                    bulletDamage: 6
                },
                bullet: {
                    radius: 8,
                    color: '#3ca4cb',
                    outline: '#25667e',
                    outlineWidth: 2,
                    speed: 10,
                    life: 120
                },
                detectionRange: 400,
                spinWhenIdle: false,
                idleSpinSpeed: 0.02,
                turnSpeed: 0.15,
                overlap: true
            }
        ],
        zoom: 1
    },

    //TIER 3 TANKS

    Triplet: {
        name: "Triplet",
        tier: 3,
        children: ["Pentashot"],
        body: {
            radius: 32,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3
        },
        barrels: [
            // Left tilted — drawn first (behind everything else)
            {
                shape: 'rect',
                angle: -0.25,
                offsetX: 0,
                offsetY: -10,
                length: 32,
                width: 25,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 40,
                knockback: 0.4
            },
            // Right tilted — drawn second (behind center)
            {
                shape: 'rect',
                angle: 0.25,
                offsetX: 0,
                offsetY: 10,
                length: 32,
                width: 25,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 80,
                knockback: 0.4
            },
            // Center barrel — drawn LAST, so it sits ON TOP of both tilted barrels
            {
                shape: 'rect',
                angle: 0,
                offsetX: 0,
                offsetY: 0,
                length: 52,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0,
                knockback: 0.6
            }
        ],
        stats: {
            damage: 10,
            hpRegen: 0.1,
            maxHp: 100,
            bulletSpeed: 10,
            bulletPenetration: 1,
            bulletReload: 10,
            bulletDamage: 6,
            maxMovementSpeed: 5
        },
        bullet: {
            radius: 10,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3,
            speed: 10,
            life: 140
        },
        zoom: 1
    },

    "Twin Double": {
        name: "Twin Double",
        tier: 3,
        children: [],
        body: {
            radius: 32,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3
        },
        barrels: [
            {
                shape: 'rect',
                angle: 0,
                offsetX: 0,
                offsetY: -15,
                length: 50,
                width: 25,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0,
                knockback: 0.6
            },
            {
                shape: 'rect',
                angle: 0,
                offsetX: 0,
                offsetY: 15,
                length: 50,
                width: 25,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 100,
                knockback: 0.6
            },
            {
                shape: 'rect',
                angle: 180 * (Math.PI / 180),
                offsetX: 0,
                offsetY: -15,
                length: 50,
                width: 25,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0,
                knockback: 0.6
            },
            {
                shape: 'rect',
                angle: 180 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 15,
                length: 50,
                width: 25,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 100,
                knockback: 0.6
            }
        ],
        stats: {
            damage: 10,
            hpRegen: 0.1,
            maxHp: 100,
            bulletSpeed: 10,
            bulletPenetration: 1,
            bulletReload: 10,
            bulletDamage: 7,
            maxMovementSpeed: 5
        },
        bullet: {
            radius: 11,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3,
            speed: 10,
            life: 140
        },
        zoom: 1
    },

    Hexa: {
        name: "Hexa",
        tier: 3,
        children: ["Octo"],
        body: {
            radius: 32,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3
        },
        barrels: [
            {
                shape: 'rect',
                angle: 0,
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0,
                knockback: 0.5
            },
            {
                shape: 'rect',
                angle: 60 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 100,
                knockback: 0.5
            },
            {
                shape: 'rect',
                angle: -60 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 100,
                knockback: 0.5
            },
            {
                shape: 'rect',
                angle: 120 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0,
                knockback: 0.5
            },
            {
                shape: 'rect',
                angle: -120 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0,
                knockback: 0.5
            },
            {
                shape: 'rect',
                angle: 180 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 100,
                knockback: 0.5
            }
        ],
        stats: {
            damage: 10,
            hpRegen: 0.1,
            maxHp: 100,
            bulletSpeed: 10,
            bulletPenetration: 1,
            bulletReload: 10,
            bulletDamage: 8,
            maxMovementSpeed: 5,
        },
        bullet: {
            radius: 11,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3,
            speed: 10,
            life: 140
        },
        zoom: 1
    },

    Triangle: {
        name: "Triangle",
        tier: 3,
        children: [],
        body: {
            radius: 32,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3
        },
        barrels: [
            {
                shape: 'rect',
                angle: 0,
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0,
                knockback: 0.4
            },
            {
                shape: 'rect',
                angle: 150 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 100,
                knockback: 0.9
            },
            {
                shape: 'rect',
                angle: -150 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 100,
                knockback: 0.9
            }
        ],
        stats: {
            damage: 10,
            hpRegen: 0.1,
            maxHp: 100,
            bulletSpeed: 10,
            bulletPenetration: 1,
            bulletReload: 10,
            bulletDamage: 8,
            maxMovementSpeed: 5
        },
        bullet: {
            radius: 11,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3,
            speed: 10,
            life: 140
        },
        zoom: 1
    },

        "Triple Auto-Tank": {
        name: "Triple Auto Tank",
        tier: 3,
        children: [],
        body: {
            radius: 32,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3
        },
        barrels: [
            {
                shape: 'rect',
                angle: 0,
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0,
                knockback: 1.0
            }
        ],
        stats: {
            damage: 10,
            hpRegen: 0.1,
            maxHp: 100,
            bulletSpeed: 10,
            bulletPenetration: 1,
            bulletReload: 10,
            bulletDamage: 8,
            maxMovementSpeed: 5
        },
        bullet: {
            radius: 11,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3,
            speed: 10,
            life: 140
        },
        turrets: [
            // Turret 1 — top (in tank frame: above the barrel)
            {
                offsetX: 0,
                offsetY: -18,
                body: {
                    radius: 14,
                    color: '#a0a0a0',
                    outline: '#646464',
                    outlineWidth: 2.5
                },
                barrels: [
                    {
                        shape: 'rect',
                        angle: 0,
                        offsetX: 0,
                        offsetY: 0,
                        length: 24,
                        width: 14,
                        color: '#969696',
                        outline: '#616161',
                        outlineWidth: 2.5,
                        tipColor: '#33333300',
                        spread: 0,
                        barrelDelay: 0,
                        knockback: 0.3
                    }
                ],
                stats: {
                    bulletSpeed: 10,
                    bulletPenetration: 1,
                    bulletReload: 12,
                    bulletDamage: 6
                },
                bullet: {
                    radius: 8,
                    color: '#3ca4cb',
                    outline: '#25667e',
                    outlineWidth: 2,
                    speed: 10,
                    life: 120
                },
                detectionRange: 400,
                spinWhenIdle: false,
                idleSpinSpeed: 0.02,
                turnSpeed: 0.15,
                overlap: true
            },
            // Turret 2 — bottom
            {
                offsetX: 0,
                offsetY: 18,
                body: {
                    radius: 14,
                    color: '#a0a0a0',
                    outline: '#646464',
                    outlineWidth: 2.5
                },
                barrels: [
                    {
                        shape: 'rect',
                        angle: 0,
                        offsetX: 0,
                        offsetY: 0,
                        length: 24,
                        width: 14,
                        color: '#969696',
                        outline: '#616161',
                        outlineWidth: 2.5,
                        tipColor: '#33333300',
                        spread: 0,
                        barrelDelay: 0,
                        knockback: 0.3
                    }
                ],
                stats: {
                    bulletSpeed: 10,
                    bulletPenetration: 1,
                    bulletReload: 12,
                    bulletDamage: 6
                },
                bullet: {
                    radius: 8,
                    color: '#3ca4cb',
                    outline: '#25667e',
                    outlineWidth: 2,
                    speed: 10,
                    life: 120
                },
                detectionRange: 400,
                spinWhenIdle: false,
                idleSpinSpeed: 0.02,
                turnSpeed: 0.15,
                overlap: true
            },
            // Turret 3 — behind
            {
                offsetX: -18,
                offsetY: 0,
                body: {
                    radius: 14,
                    color: '#a0a0a0',
                    outline: '#646464',
                    outlineWidth: 2.5
                },
                barrels: [
                    {
                        shape: 'rect',
                        angle: 0,
                        offsetX: 0,
                        offsetY: 0,
                        length: 24,
                        width: 14,
                        color: '#969696',
                        outline: '#616161',
                        outlineWidth: 2.5,
                        tipColor: '#33333300',
                        spread: 0,
                        barrelDelay: 0,
                        knockback: 0.3
                    }
                ],
                stats: {
                    bulletSpeed: 10,
                    bulletPenetration: 1,
                    bulletReload: 12,
                    bulletDamage: 6
                },
                bullet: {
                    radius: 8,
                    color: '#3ca4cb',
                    outline: '#25667e',
                    outlineWidth: 2,
                    speed: 10,
                    life: 120
                },
                detectionRange: 400,
                spinWhenIdle: false,
                idleSpinSpeed: 0.02,
                turnSpeed: 0.15,
                overlap: true
            }
        ],
        zoom: 1
    },

    //TIER-4 TANKS

    Pentashot: {
        name: "Pentashot",
        tier: 4,
        children: [],
        body: {
            radius: 32,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3
        },
        barrels: [
            // Far-left — outermost, shortest, most tilted (drawn first / behind)
            {
                shape: 'rect',
                angle: -0.65,
                offsetX: -10,
                offsetY: -8,
                length: 28,
                width: 20,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 120,
                knockback: 0.4
            },
            // Far-right — mirror of far-left
            {
                shape: 'rect',
                angle: 0.65,
                offsetX: -10,
                offsetY: 8,
                length: 28,
                width: 20,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 160,
                knockback: 0.4
            },
            // Left tilted — middle tier, drawn behind center
            {
                shape: 'rect',
                angle: -0.25,
                offsetX: 0,
                offsetY: -10,
                length: 32,
                width: 25,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 40,
                knockback: 0.4
            },
            // Right tilted — mirror of left tilted
            {
                shape: 'rect',
                angle: 0.25,
                offsetX: 0,
                offsetY: 10,
                length: 32,
                width: 25,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 80,
                knockback: 0.4
            },
            // Center — drawn last so it sits on top of all four tilted barrels
            {
                shape: 'rect',
                angle: 0,
                offsetX: 0,
                offsetY: 0,
                length: 52,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0,
                knockback: 0.4
            }
        ],
        stats: {
            damage: 10,
            hpRegen: 0.1,
            maxHp: 100,
            bulletSpeed: 10,
            bulletPenetration: 1,
            bulletReload: 10,
            bulletDamage: 5,
            maxMovementSpeed: 5
        },
        bullet: {
            radius: 9,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3,
            speed: 10,
            life: 140
        },
        zoom: 1
    },

    Octo: {
        name: "Octo",
        tier: 4,
        children: [],
        body: {
            radius: 32,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3
        },
        barrels: [
            {
                shape: 'rect',
                angle: 0,
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0
            },
            {
                shape: 'rect',
                angle: 45 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0
            },
            {
                shape: 'rect',
                angle: -45 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0
            },
            {
                shape: 'rect',
                angle: 90 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0
            },
            {
                shape: 'rect',
                angle: -90 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0
            },
            {
                shape: 'rect',
                angle: 135 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0
            },
            {
                shape: 'rect',
                angle: -135 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0
            },
            {
                shape: 'rect',
                angle: 180 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 0,
                length: 50,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0
            }
        ],
        stats: {
            damage: 10,
            hpRegen: 0.1,
            maxHp: 100,
            bulletSpeed: 10,
            bulletPenetration: 1,
            bulletReload: 10,
            bulletDamage: 8,
            maxMovementSpeed: 5
        },
        bullet: {
            radius: 11,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3,
            speed: 10,
            life: 140
        },
        zoom: 1
    },

    Booster: {
        name: "Booster",
        tier: 4,
        children: [],
        body: {
            radius: 32,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3
        },
        barrels: [
            // Main front gun — the actual "weapon"
            {
                shape: 'rect',
                angle: 0,
                offsetX: 0,
                offsetY: 0,
                length: 45,
                width: 28,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 0
            },
            // Left large angled back barrel
            {
                shape: 'rect',
                angle: 150 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 0,
                length: 30,
                width: 24,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 100
            },
            // Right large angled back barrel
            {
                shape: 'rect',
                angle: -150 * (Math.PI / 180),
                offsetX: 0,
                offsetY: 0,
                length: 30,
                width: 24,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 3,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 100
            },
            // 4 small straight-back barrels — the "boosters"
            {
                shape: 'rect',
                angle: Math.PI,
                offsetX: 0,
                offsetY: -14,
                length: 18,
                width: 10,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 2,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 100
            },
            {
                shape: 'rect',
                angle: Math.PI,
                offsetX: 0,
                offsetY: -5,
                length: 18,
                width: 10,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 2,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 100
            },
            {
                shape: 'rect',
                angle: Math.PI,
                offsetX: 0,
                offsetY: 5,
                length: 18,
                width: 10,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 2,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 100
            },
            {
                shape: 'rect',
                angle: Math.PI,
                offsetX: 0,
                offsetY: 14,
                length: 18,
                width: 10,
                color: '#969696',
                outline: '#616161',
                outlineWidth: 2,
                tipColor: '#33333300',
                spread: 0,
                barrelDelay: 100
            }
        ],
        stats: {
            damage: 10,
            hpRegen: 0.1,
            maxHp: 100,
            bulletSpeed: 10,
            bulletPenetration: 1,
            bulletReload: 10,
            bulletDamage: 7,
            maxMovementSpeed: 5
        },
        bullet: {
            radius: 10,
            color: '#3ca4cb',
            outline: '#25667e',
            outlineWidth: 3,
            speed: 10,
            life: 140
        },
        zoom: 1
    }
};