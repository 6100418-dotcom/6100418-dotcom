extends CharacterBody2D


const SPEED = 250.0
const JUMP_VELOCITY = -450.0


func _physics_process(delta: float) -> void:
	if not is_on_floor():
		velocity += get_gravity() * delta

	if Input.is_action_just_pressed("jump") and is_on_floor():
		print("jump")
		
	if Input.is_action_just_pressed("left"):
		print("left")
		
	if Input.is_action_just_pressed("right"):
		print("right")
		
	if Input.is_action_just_pressed("dash"):
		print("dash")

	move_and_slide()
