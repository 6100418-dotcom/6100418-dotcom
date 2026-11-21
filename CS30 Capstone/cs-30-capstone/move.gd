extends CharacterBody2D

const speed = 250.0
const dashSpeed = 800.0
const dashTime = 0.2
const dashCooldown = 1.0
const jumpVel = -400.0

var direction = 1
var isDashing = false
var dashTimer = 0.0
var cooldownTimer = 0.0


func _physics_process(delta: float) -> void:

	if not isDashing and not is_on_floor():
		velocity += get_gravity() * delta

	if Input.is_action_just_pressed("jump") and is_on_floor() and not isDashing:
		velocity.y = jumpVel

	if Input.is_action_just_pressed("dash") and not isDashing and cooldownTimer <= 0:
		isDashing = true
		dashTimer = dashTime
		velocity.x = dashSpeed * direction
		velocity.y = 0

	if isDashing:
		dashTimer -= delta
		velocity.x = dashSpeed * direction
		velocity.y = 0

		if dashTimer <= 0:
			isDashing = false
			cooldownTimer = dashCooldown

	else:
		if Input.is_action_pressed("left"):
			velocity.x = -speed
			direction = -1

		elif Input.is_action_pressed("right"):
			velocity.x = speed
			direction = 1

		else:
			velocity.x = move_toward(velocity.x, 0, speed)

	if cooldownTimer > 0:
		cooldownTimer -= delta

	move_and_slide()
